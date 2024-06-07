import { useEffect, useState } from "react";

const useFethData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
          setData(data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [url]);

  return {
    data,
    isLoading,
    error,
    setData,
  };
};

export default useFethData;
