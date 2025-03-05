import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {data.map((item) => {
          <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FetchApi;
