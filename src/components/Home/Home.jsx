import { Header } from "@/components/Header/Header";
import styles from "./Home.module.scss";
// import PhoneMockupSlider from "../common/Slider/Slider";
import PhoneMockupSlider from "./PhoneMockupSlider";

export function Home() {
  return (
    <section>
      <div className={styles.home}>
        <Header />
        <div className={styles.wrapper}>
          <div className={`container ${styles.content}`}>
            <h1>Judging, Simplified</h1>
            <p>One tap. Fast results. No hassle.</p>
            <button className={styles.button}>TRY IT</button>
          </div>
          <div className={styles.slider}>
            <PhoneMockupSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
