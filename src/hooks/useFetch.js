import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
            .then((res) => {
              if (!res.ok) {
                throw new Error('Could not fetch the data for that resource');
              } else {
                return res.json()
              }
            })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === 'AbortError') {
            return 
          } else {
            setIsPending(false);
            setError(error.message);
          }
        });
      setIsPending(false);
    }, 500);
    
    return () => abortController.abort();
  }, [url]);

  return { data, setData, isPending, error }
}

export default useFetch;


/*
  Custom hooks
  useFetch to fetch data from a url.
  abortController to abort controller when we switch from this view to another view whiles fetching data.
  error messages
*/