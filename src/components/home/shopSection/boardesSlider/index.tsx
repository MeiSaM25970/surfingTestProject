import * as React from "react";
import { ISurfboardData } from "../..";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SliderCard } from "./sliderCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";
interface IBoardsSliderProps {
  boards: ISurfboardData[];
}

export const BoardsSlider: React.FunctionComponent<IBoardsSliderProps> = ({
  boards,
}) => {
  return (
    <div className="board-slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        navigation
        className="my-swiper"
      >
        {boards.map((board, index) => (
          <SwiperSlide key={index}>
            <SliderCard data={board} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
