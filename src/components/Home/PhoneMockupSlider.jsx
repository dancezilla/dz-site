import { Iphone } from "@/components/common/Iphone/Iphone";
import { Slider } from "@/components/common/Slider/Slider";

const slidesImg = [
  <img src='/slider-screen/Screen-1.png' key='1' />,
  <img src='/slider-screen/Screen-2.png' key='2' />,
  <img src='/slider-screen/screen-3.png' key='3' />,
  <img src='/slider-screen/screen-4.png' key='4' />,
  <img src='/slider-screen/screen-5.png' key='5' />,
  <img src='/slider-screen/screen-6.png' key='6' />,
];
export const PhoneMockupSlider = () => {
  return (
    <Iphone>
      <Slider slides={slidesImg} slidesView={1} />
    </Iphone>
  );
};
