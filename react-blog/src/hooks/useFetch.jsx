import React, { useEffect, useState } from "react";

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endPoint);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {}
    };
    fetchData();
  }, [endPoint]);

  return { data, loading, error };
};

export default useFetch;
