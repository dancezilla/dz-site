import Header from "../Header/Header";
import styles from "../Home/Home.module.css";

export function Home() {
  return (
    <section>
      <div className={styles.home}>
        <Header />
        <div className={styles.content}>
          <h1>Judging, Simplified</h1>
          <p>One tap. Fast results. No hassle.</p>
        </div>
      </div>
    </section>
  );
}
