import { Alert } from "flowbite-react";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [FinalData, setFinalData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [IsError, setIsError] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFinalData(data.results);
        setIsLoading(false);
        setIsError(false);
      });
  }, [url]);

  return { FinalData, IsLoading, IsError };
};

export default useFetch;
