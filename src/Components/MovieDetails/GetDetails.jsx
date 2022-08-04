import React, { useEffect, useState } from "react";
import MovieVideo from "./MovieVideo";
import { useLocation } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

import { Star, Globe, TagIcon } from "../Icon";

const GetDetails = () => {
  const [MovieIdState, setMovieIdState] = useState(0);
  let locations = useLocation();
  let GettingMovieID = locations.state;

  useEffect(() => {
    setMovieIdState(GettingMovieID);
    console.log(MovieIdState);
  }, []);

  let Data = `https://api.themoviedb.org/3/movie/${GettingMovieID}?api_key=b59349f0c2f8513bb5cbf2003ec8678b`;

  const { FinalData, IsLoading, IsError } = useFetch(Data);
  const {
    homepage,
    belongs_to_collection,
    genres: AllTags,
    vote_average,
    title,
    release_date,
    backdrop_path,
    overview,
    poster_path,
    production_companies,
  } = FinalData;

  let BaseImagesUrl = `https://image.tmdb.org/t/p/w500`;
  let AllImages = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg`;
  let posterImg = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yw7gr7DhHHVTLlO8Se8uH17TDMA.jpg`;

  return (
    <div>
      <div
        className="w-full h-[20rem] relative border border-blue-400 "
        style={{
          backgroundImage: `url(${BaseImagesUrl}${backdrop_path} )`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute bottom-0 bg-slate-400/70 w-full ">
          <h1 className="text-2xl">{title} </h1>
          <p>{release_date}</p>
        </div>
      </div>

      {/* second part */}
      <div className="flex flex-col sm:flex-row  justify-between">
        <div className="">
          <img
            className="p-2 rounded-2xl ]"
            src={BaseImagesUrl + poster_path}
            alt=""
          />
        </div>
        <div>
          <div className=" flex  gap-2 mt-4">
            <div className=" flex ">
              <span>
                <Star />
              </span>
              <span> {vote_average}</span>
            </div>
            <div>
              <a target="_blank" href={homepage}>
                <Globe />
              </a>
            </div>
          </div>
          <div>
            <p className="p-2 ">{overview}</p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span>
                <TagIcon />
              </span>
              <h3 className="text-2xl my-4 ">Tags</h3>
            </div>

            <div>
              {AllTags &&
                AllTags.map((tagItems) => {
                  return (
                    <span className="mx-1 cursor-pointer my-2 sm:my-0 inline-block border bg-gray-100 transition-all text-slate-800 hover:text-gray-100 hover:bg-slate-800 border-teal-800 rounded-full p-2">
                      {tagItems.name}
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* production_companies */}
      <div>
        <h3 className="text-2xl my-4  text-center font-bold">
          Production Companies
        </h3>
        <div className="flex justify-center items-center sm:flex-row flex-col">
          {production_companies &&
            production_companies.map((companiesName) => {
              const { origin_country, logo_path, name } = companiesName;
              return (
                <div className=" border w-[80%]  sm:w-[20rem] min-h-[12rem]  border-teal-500 m-2 p-2 rounded-lg">
                  <p className="text-xl text-center m-2">
                    {name} ({origin_country})
                  </p>
                  <img
                    src={BaseImagesUrl + logo_path}
                    alt={name + " logo not fount"}
                  />
                </div>
              );
            })}
        </div>
      </div>

      {/* video sections */}
      <div>
        <MovieVideo MovieIdState={MovieIdState} />
      </div>
    </div>
  );
};

export default GetDetails;
