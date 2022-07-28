// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import leadingSpiner from "../../assets/leading-spiner.svg";

import PerMovie from "../PerMovie";

export default ({ apiData, IsLoading }) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {IsLoading ? <img src={leadingSpiner} alt="" /> : ""}
        {apiData.results &&
          apiData.results.map((data, index) => {
            return (
              <>
                <SwiperSlide key={index}>
                  <PerMovie
                    title={data.title}
                    voteAverage={data.vote_average}
                    voteCount={data.vote_count}
                    poster={data.poster_path}
                  />
                </SwiperSlide>
                ;
              </>
            );
          })}
      </Swiper>
    </>
  );
};
