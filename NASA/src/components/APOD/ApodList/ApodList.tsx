import "./ApodList.css";
import { useEffect, useRef, useState } from "react";
import { ApodPicture, DateRange } from "../../../types";
import ClipLoader from "react-spinners/ClipLoader";
import { useFetchMoreApodData, useLastDate } from "../../../hooks";
import { ApodItem } from "../ApodItem";
import { DateFilter } from "../DateFilter";

type ApodListProps = {
  data: ApodPicture[];
};

export const ApodList = ({ data }: ApodListProps) => {
  const [pictures, setPictures] = useState<ApodPicture[]>(data);
  const { lastDate, setLastDate } = useLastDate({ data });
  const [dates, setDates] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPictureRef = useRef<HTMLLIElement | null>(null);

  const isDateFilterActive = dates.startDate !== null && dates.endDate !== null;

  const { fetchMoreItems, isLoading } = useFetchMoreApodData({
    startDate: dates.startDate,
    endDate: dates.endDate,
    lastDate,
    isDateFilterActive,
    setPictures,
    setLastDate,
  });

  useEffect(() => {
    if (isDateFilterActive) fetchMoreItems();
  }, [dates.startDate, dates.endDate]);

  useEffect(() => {
    if (isDateFilterActive) return;

    if (observer.current) observer.current.disconnect();

    const options = {
      threshold: 0.2,
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
        handleClearFilters={handleClearFilters}
        currentDates={dates}
      />
      <ul>
        {pictures?.map((picture: ApodPicture, index) => {
          const isVideo = picture.media_type === "video";
          const isLastPicture = index === pictures.length - 1;

          return (
            <ApodItem
              key={picture.date}
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
