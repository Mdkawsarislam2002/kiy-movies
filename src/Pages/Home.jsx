import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

import TopArea from "../Components/HomePages/TopArea";
import PopUpCard from "../Components/HomePages/PopUpCard";
import NowPlaying from "../Components/slider/NowPlaying";
import Popular from "../Components/slider/Popular";
import TopRated from "../Components/slider/TopRated";
import SearchResultShow from "../Components/SearchResultShow";

const Home = () => {
  const [SearchValue, setSearchValue] = useState("");
  const [SearchResult, setSearchResult] = useState([]);
  const [IsThere, setIsThere] = useState(false);
  const [IsExist, setIsExist] = useState(true);

  const SearchUserValue = (e) => {
    setSearchValue(e.target.value);
  };

  const OnSearch = (e) => {
    e.preventDefault();
    setIsThere(true);
  };

  useEffect(() => {
    let SearchApi = `https://api.themoviedb.org/3/search/movie?api_key=b59349f0c2f8513bb5cbf2003ec8678b&query=${SearchValue}&page=1&include_adult=false`;

    if (SearchValue) {
      fetch(SearchApi)
        .then((res) => res.json())

        .then((data) => {
          setSearchResult(data.results);
          setIsExist(false);
        });
    }
  }, [SearchValue]);

  const AuthValue = useAuth();
  // console.log(AuthValue);

  return (
    <div>
      <PopUpCard />
      <TopArea
        SearchValue={SearchValue}
        SearchUserValue={SearchUserValue}
        OnSearch={OnSearch}
      />
      {IsThere ? (
        <>
          <SearchResultShow
            IsExist={IsExist}
            SearchValue={SearchValue}
            setSearchValue={setSearchValue}
            setIsThere={setIsThere}
            SearchResult={SearchResult}
          />
        </>
      ) : (
        <>
          <NowPlaying />
          <Popular />
          <TopRated />
        </>
      )}
    </div>
  );
};

export default Home;
