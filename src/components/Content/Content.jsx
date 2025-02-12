import styles from "./Content.module.css";
import About from "./About";
import { HowItWorks } from "./HowItWorks";

export default function Content() {
  return (
    <section className={styles.content}>
      <About />
      <HowItWorks />
    </section>
  );
}
