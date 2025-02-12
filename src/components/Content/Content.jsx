import styles from "./Content.module.scss";
import { About } from "./About";
import { HowItWorks } from "./HowItWorks";

export function Content() {
  return (
    <section className={styles.content}>
      <About />
      <HowItWorks />
    </section>
  );
}
