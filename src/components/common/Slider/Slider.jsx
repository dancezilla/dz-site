import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./Slider.module.scss";

export const Slider = ({ slides, slidesView }) => {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={slidesView}
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
