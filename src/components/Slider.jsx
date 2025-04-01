import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./Slider.module.scss";
import { Iphone } from "./common/Iphone/Iphone";

const PhoneMockupSlider = () => {
  return (
    <Iphone>
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
        <SwiperSlide>
          <img src='public/screen.png' alt='Screen' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='public/screen2.png' alt='Slide 2' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='public/screen3.png' alt='Slide 3' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='public/screen4.png' alt='Slide 3' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='public/screen5.png' alt='Slide 3' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='public/screen6.png' alt='Slide 3' />
        </SwiperSlide>
      </Swiper>
    </Iphone>
  );
};

export default PhoneMockupSlider;
