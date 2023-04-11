import { useEffect, useState } from 'react';

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/${url}`,
          opts
        );

        if (!response.ok) {
          setError(response.statusText);
        } else {
          const data = await response.json();
          setData(data.status);
        }
      } catch (e) {
        console.log('err:', e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequest();
  }, [url, opts]);

  return [data, isLoading, error];
};
