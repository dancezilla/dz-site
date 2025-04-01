import { Header } from "@/components/Header/Header";
import styles from "./Home.module.scss";
import { useState, useEffect } from "react";
import MySlider from "../Slider";

export function Home() {
  const images = ["/BgHome1.png", "/gallery1.png"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <div className={styles.home}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1>Judging, Simplified</h1>
            <p>One tap. Fast results. No hassle.</p>
            <button className={styles.button}>TRY IT</button>
          </div>
          <div className={styles.slider}>
            <MySlider />
          </div>
        </div>
      </div>
    </section>
  );
}
