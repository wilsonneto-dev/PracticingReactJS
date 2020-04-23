import { useState, useEffect } from 'react';
import api from '../services/api';

const useApi = (initialUrl = '', initialData = []) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await api.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };

    if (url !== '') getData();
  }, [url]);

  return [data, { isLoading, isError }, setUrl];
};

export default useApi;
