import { useCallback, useState } from "react";

const useHttp = (requestFunction) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const sendRequest = useCallback(
    async (requestData) => {
      setIsLoading(true);
      try {
        const responseData = await requestFunction(requestData);
        setResponseData(responseData);
      } catch (error) {
        setHasError(error);
      }
      setIsLoading(false);
    },
    [requestFunction]
  );

  return {
    isLoading,
    hasError,
    responseData,
    sendRequest,
  };
};

export default useHttp;
