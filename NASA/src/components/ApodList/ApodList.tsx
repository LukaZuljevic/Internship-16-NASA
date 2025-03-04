import "./ApodList.css";
import { useEffect, useRef, useState } from "react";
import { ApodPicture } from "../../types";
import { fetchApodPicture } from "../../services/ApodApi";
import { getNextDateRange } from "../../utils";
import ClipLoader from "react-spinners/ClipLoader";
import { useLastDate } from "../../hooks";
import { ApodItem } from "../ApodItem";
import { DateFilter } from "../DateFilter";

type ApodListProps = {
  data: ApodPicture[];
};

export const ApodList = ({ data }: ApodListProps) => {
  const [pictures, setPictures] = useState<ApodPicture[]>(data);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { lastDate, setLastDate } = useLastDate({ data });
  const [dates, setDates] = useState<{
    startDate: string | null;
    endDate: string | null;
  }>({
    startDate: null,
    endDate: null,
  });

  const isDateFilterActive = dates.startDate !== null && dates.endDate !== null;

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPictureRef = useRef<HTMLLIElement | null>(null);

  const fetchMoreItems = async () => {
    setIsLoading(true);
    try {
      let fetchStartDate = dates.startDate;
      let fetchEndDate = dates.endDate;

      if (!isDateFilterActive) {
        const { startDateInfo, endDateInfo } = getNextDateRange(lastDate);
        fetchStartDate = startDateInfo;
        fetchEndDate = endDateInfo;
      }

      const newPictures = await fetchApodPicture({
        startDate: fetchStartDate,
        endDate: fetchEndDate,
      });

      isDateFilterActive
        ? setPictures(newPictures)
        : setPictures((prev) => [...prev, ...newPictures]);

      if (newPictures.length > 0)
        setLastDate(newPictures[newPictures.length - 1].date);
    } catch (error) {
      console.error("Error loading more pictures:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isDateFilterActive) fetchMoreItems();
  }, [dates.startDate, dates.endDate]);

  useEffect(() => {
    if (isDateFilterActive) return;

    if (observer.current) observer.current.disconnect();

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) fetchMoreItems();
    }, options);

    if (lastPictureRef.current)
      observer.current.observe(lastPictureRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [lastDate, isDateFilterActive]);

  const handleClearFilters = () => {
    setPictures(data);
    setLastDate(data[data.length - 1].date);
  };

  const setLastPictureRef = (element: HTMLLIElement) => {
    lastPictureRef.current = element;
    if (!isDateFilterActive && observer.current && element)
      observer.current.observe(element);
  };

  return (
    <div className="apod-list">
      <DateFilter
        setDates={setDates}
        onClearFilters={handleClearFilters}
        currentDates={dates}
      />
      <ul>
        {pictures?.map((picture: ApodPicture, index) => {
          const isVideo = picture.media_type === "video";
          const isLastPicture = index === pictures.length - 1;
          
          return (
            <ApodItem
              key={`${picture.date}-${index}`}
              picture={picture}
              isVideo={isVideo}
              isLastPicture={isLastPicture}
              setLastPictureRef={setLastPictureRef}
            />
          );
        })}
      </ul>
      {isLoading && (
        <div className="loading-more">
          <ClipLoader size={50} />
        </div>
      )}
    </div>
  );
};
