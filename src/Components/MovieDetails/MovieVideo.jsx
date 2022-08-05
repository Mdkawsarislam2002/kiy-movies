import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";

import MovieSlider from "./MovieSlider";

const MovieVideo = ({ MovieIdState }) => {
  const [MovieDataList, setMovieDataList] = useState([]);

  let VideoApi = `https://api.themoviedb.org/3/movie/${MovieIdState}/videos?api_key=b59349f0c2f8513bb5cbf2003ec8678b`;
  const { FinalData, IsLoading, IsError } = useFetch(VideoApi);
  useEffect(() => {
    setMovieDataList(FinalData.results);
    ``;
  }, [FinalData]);

  return (
    <div className="m-4">
      <MovieSlider MovieIdState={MovieIdState} MovieDataList={MovieDataList} />
    </div>
  );
};

export default MovieVideo;
