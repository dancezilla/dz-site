import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./Slider.module.scss";

const PhoneMockupSlider = () => {
  return (
    <div className={styles.phoneMockup}>
      <div className={styles.phoneScreen}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
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
            <img src='https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled' alt='Slide 2' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled' alt='Slide 3' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PhoneMockupSlider;
