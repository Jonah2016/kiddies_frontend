import { useState, useEffect } from "react";

// this function hook takes the url of the aoi and returns
// @Returns an object of {data, loading, error }
// Where data => object, loading => boolean, error => any type

function useFetchData(url) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500); // Set timeout before setting loading to false
      }
    };

    fetchData();
  }, [url]); // Dependency array to trigger refetch on URL change

  return { data, loading, error };
}

export default useFetchData;
