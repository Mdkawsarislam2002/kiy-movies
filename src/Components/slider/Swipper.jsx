import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SwiperSlider() {
  return (
    <div className="my-4">
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div className="py-4 bg-slate-400">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-4 bg-slate-400">Slide 2</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
