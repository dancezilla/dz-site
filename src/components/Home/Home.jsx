import { Header } from "@/components/Header/Header";
import styles from "./Home.module.scss";
// import PhoneMockupSlider from "../common/Slider/Slider";
import { PhoneMockupSlider } from "./PhoneMockupSlider";

export function Home() {
  return (
    <section>
      <div className={styles.home}>
        <Header />
        <div className={styles.wrapper}>
          <div className={`container ${styles.content}`}>
            <h1>Judging, Simplified</h1>
            <p>One tap. Fast results. No hassle.</p>
            <button
              onClick={() =>
                (window.location.href =
                  "mailto:zntu1995@gmail.com?subject=Interested%20in%20working%20with%20us%3F%20Share%20your%20request%20and%20contact%20details%20%E2%80%94%20we%E2%80%99ll%20get%20in%20touch%20soon.")
              }
              className={styles.button}
            >
              TRY IT
            </button>
          </div>
          <div className={styles.slider}>
            <PhoneMockupSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
