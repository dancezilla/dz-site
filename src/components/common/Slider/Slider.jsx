import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./Slider.module.scss";

export const Slider = () => {
  const slides = [
    "/slider/screen.png",
    "/slider/Screen2.png",
    "/slider/Screen3.png",
    "/slider/Screen4.png",
    "/slider/Screen5.png",
    "/slider/Screen6.png",
  ];

  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
