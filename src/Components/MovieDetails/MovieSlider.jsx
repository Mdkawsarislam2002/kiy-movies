import MovieFrame from "./MovieFrame";
import { v4 as uuidv4 } from "uuid";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MovieSlider = ({ MovieDataList, MovieIdState }) => {
  // console.log(MovieIdState);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {MovieDataList &&
        MovieDataList.map((value, index) => {
          return (
            <SwiperSlide key={index} className=" border border-teal-800">
              <MovieFrame currentKey={value.key} />
              {/* <img className="w-full h-full" src={TestImg} alt="TestImg" /> */}
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
export default MovieSlider;

/*

https://api.themoviedb.org/3/movie/<<movieId>>/videos?api_key=b59349f0c2f8513bb5cbf2003ec8678b
*/
