import React, { useEffect } from "react";

const API = () => {
  let key = `b59349f0c2f8513bb5cbf2003ec8678b`;
  let api = ` https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
  let myApi = `https://api.themoviedb.org/3/movie/popular?api_key=b59349f0c2f8513bb5cbf2003ec8678b`;

  useEffect(() => {
    fetch(myApi)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return <div>api data</div>;
};
export default API;
