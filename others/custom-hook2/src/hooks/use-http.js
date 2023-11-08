import { useState, useCallback } from 'react';

const useHttp = async () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);

    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  // Modern JS short cut (key와 value가 같을 때)
  return {
    isLoading,
    error,
    sendRequest
  }
    // 같은 결과
    // isLoading: isLoading,
    // error: error,
    // sendRequest: sendRequest
  
};

export default useHttp;