import "./fetchDataWithLoading.css";
import { ComponentType, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useErrorHandler } from "../hooks/useErrorHandler";

type FetchDataFunction<T> = () => Promise<T>;

interface FetchDataWithLoadProps<T> {
  data: T;
}

export const fetchDataWithLoad = <T, P extends FetchDataWithLoadProps<T>>(
  WrappedComponent: ComponentType<P>,
  fetchData: FetchDataFunction<T>
) => {
  return (props: Omit<P, keyof FetchDataWithLoadProps<T>>) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [fetchedData, setFetchedData] = useState<T | null>(null);
    const { error, handleError, resetError } = useErrorHandler();

    useEffect(() => {
      const fetchDataWithLoading = async () => {
        try {
          setIsLoading(true);
          resetError();

          const response = await fetchData();

          setFetchedData(response);
        } catch (error) {
          handleError(
            error instanceof Error ? error : new Error(String(error))
          );
        } finally {
          setIsLoading(false);
        }
      };

      fetchDataWithLoading();
    }, []);

    if (isLoading) {
      return (
        <div className="clip-loader">
          <ClipLoader size={150} />
        </div>
      );
    }

    if (error) throw error;

    return <WrappedComponent data={fetchedData as T} {...(props as P)} />;
  };
};
