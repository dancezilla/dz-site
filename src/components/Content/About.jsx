import styles from "./About.module.scss";

export function About() {
  return (
    <section id='about' className={`container ${styles.about}`}>
      <div className={styles.textBlock}>
        <h1 className={styles.header}>New standart of judging</h1>
        <p className={styles.descriptionApp}>
          Our app isn’t just a tool — it’s a new era in dance evaluation. Forget paper, pens and endless calculations.
          With a single tap, you record scores, and the technology takes care of the rest.
          <span className={styles.highlightedSentence}> Fast. Flawless. Effortless.</span>
        </p>
      </div>
      <div className={styles.galleryGrid}>
        <div className={styles.card}>
          <img className={styles.firstImg} src='fest5.jpeg' alt='Photo-1' />
        </div>
        <div className={`${styles.card} ${styles.wide}`}>
          <img className={styles.firstImg} src='fest1.jpeg' alt='Photo-1' />
        </div>
        <div className={`${styles.card} ${styles.wide}`}>
          <img className={styles.firstImg} src='fest4.jpeg' alt='Photo-1' />
        </div>
        <div className={styles.card}>
          <img className={styles.firstImg} src='fest2.jpeg' alt='Photo-1' />
        </div>
      </div>
    </section>
  );
}
