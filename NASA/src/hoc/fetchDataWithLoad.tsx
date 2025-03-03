import { ComponentType, useEffect, useState } from "react";

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
    const [isMounted, setIsMounted] = useState<boolean>(true);

    useEffect(() => {
      setIsMounted(true);

      const fetchDataWithLoading = async () => {
        try {
          setIsLoading(true);

          const response = await fetchData();

          if (isMounted) {
            setFetchedData(response);
            setIsLoading(false);
          }
        } catch (error) {
          console.log("Error", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchDataWithLoading();
    }, []);

    if (isLoading) return <div className="loading-spinner">Loading...</div>;

    return (
      <WrappedComponent fetchedData={fetchedData as T} {...(props as P)} />
    );
  };
};
