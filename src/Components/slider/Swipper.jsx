// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import PerMovie from "../PerMovie";

export default ({ apiData }) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {apiData.results &&
          apiData.results.map((data, index) => {
            //  title, poster, voteAverage, voteCount
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
