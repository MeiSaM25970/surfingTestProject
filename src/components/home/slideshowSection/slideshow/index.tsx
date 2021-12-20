import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slideshow.css";
import { ISlideshowData, useHomeService } from "../..";
interface ISlideshowProps {
  sliderData: ISlideshowData[];
}
export const Slideshow: React.FC<ISlideshowProps> = ({ sliderData }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const service = useHomeService()!;
  return (
    <div className="swiper-holder slideshow">
      <Swiper
        autoplay
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => {
          setActiveSlideIndex(swiper.activeIndex);
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper) {
            (swiper.params.navigation as NavigationOptions).prevEl =
              navigationPrevRef.current;
            (swiper.params.navigation as NavigationOptions).nextEl =
              navigationNextRef.current;
          }
        }}
        className="mySwiper"
      >
        {sliderData.map((img, index) => (
          <SwiperSlide className="sliderCardHolder" key={index}>
            <img
              src={service.getAbsoluteUrl(img.url)}
              alt={`slideshow-${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {sliderData.map((img, index) => (
        <div
          className={`slider-text ${
            index === activeSlideIndex ? "active" : ""
          }`}
          key={index}
        >
          <h4>{img.text.title}</h4>
          <h2>{img.text.header}</h2>
          <p>{img.text.description}</p>
        </div>
      ))}

      <div ref={navigationPrevRef} className="swiper-button-prev" />
      <div className="swiper-pagination">
        <span className="active-pagination">{`${activeSlideIndex + 1}`}</span>
        <span className="divider-pagination"> /</span>
        <span className="pagination-length">{`${sliderData.length}`}</span>
      </div>
      <div ref={navigationNextRef} className="swiper-button-next" />
    </div>
  );
};
