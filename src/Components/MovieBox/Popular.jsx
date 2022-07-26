import React, { useEffect, useState } from "react";
import PerMovie from "../../Components/PerMovie";
import useFetch from "../../Hooks/useFetch";
// import { PopularMovie } from "../../api";
import Loader from "../../assets/TheLoader.svg";

const Popular = () => {
  const PopularMoviePage1 = `https://api.themoviedb.org/3/movie/popular?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=1`;
  const PopularMoviePage2 = `https://api.themoviedb.org/3/movie/popular?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=2`;
  const PopularMoviePage3 = `https://api.themoviedb.org/3/movie/popular?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=3`;

  const { FinalData, IsLoading, IsError } = useFetch(PopularMoviePage1);
  const {
    FinalData: FinalDataTwo,
    IsLoading: IsLoadingTwo,
    IsError: IsErrorTwo,
  } = useFetch(PopularMoviePage2);

  const {
    FinalData: FinalDataThree,
    IsLoading: IsLoadingThree,
    IsError: IsErrorThree,
  } = useFetch(PopularMoviePage3);
  return (
    <>
      <div className="m-4">
        <h2 className="text-xl font-bold mx-2  "> Popular Movie Right Now </h2>
        <div className=" flex overflow-x-scroll my-4">
          {IsLoading ? (
            <div className="grid place-content-center w-screen">
              <img src={Loader} alt="loading" />
            </div>
          ) : (
            FinalData.map((movieData) => {
              return (
                <div key={movieData.id}>
                  <PerMovie
                    title={movieData.title}
                    voteAverage={movieData.vote_average}
                    voteCount={movieData.vote_count}
                    poster={movieData.poster_path}
                  />
                </div>
              );
            })
          )}

          {/* 2nd fetch  */}
          {IsLoading ? (
            <div className="grid place-content-center w-screen">
              <img src={Loader} alt="loading" />
            </div>
          ) : (
            FinalDataTwo.map((movieData) => {
              return (
                <div key={movieData.id}>
                  <PerMovie
                    title={movieData.title}
                    voteAverage={movieData.vote_average}
                    voteCount={movieData.vote_count}
                    poster={movieData.poster_path}
                  />
                </div>
              );
            })
          )}
          {/* 2nd fetch end  */}
          {/* 3nd fetch start  */}
          {IsLoading ? (
            <div className="grid place-content-center w-screen">
              <img src={Loader} alt="loading" />
            </div>
          ) : (
            FinalDataThree.map((movieData) => {
              return (
                <div key={movieData.id}>
                  <PerMovie
                    title={movieData.title}
                    voteAverage={movieData.vote_average}
                    voteCount={movieData.vote_count}
                    poster={movieData.poster_path}
                  />
                </div>
              );
            })
          )}

          {/* 3nd fetch end  */}
        </div>
      </div>
    </>
  );
};

export default Popular;
