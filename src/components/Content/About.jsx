import styles from "./About.module.scss";

export function About() {
  return (
    <section id='about' className={`container ${styles.about}`}>
      <h1 className={styles.header}>New standart of judging</h1>
      <div className={styles.textBlockFirst}>
        <img className={styles.firstImg} src='gallery1.png' alt='Photo-1' />
        <p className={styles.descriptionApp}>
          <span className={styles.highlightedSentence}>Our app isn’t just a tool </span> — it’s a new era in dance
          evaluation. Forget paper, pens, and endless calculations. With a single tap, you record scores, and the
          technology takes care of the rest.
          <br />
          <span className={styles.highlightedSentence}> Fast. Flawless. Effortless.</span>
          This isn’t just convenience — it’s the standard of the future, available today.
        </p>
      </div>
      <div className={styles.textBlockSecond}>
        <p className={styles.descriptionApp}>
          <span className={styles.highlightedSentence}>Our app isn’t just a tool </span> — it’s a new era in dance
          evaluation. Forget paper, pens, and endless calculations. With a single tap, you record scores, and the
          technology takes care of the rest.
          <br />
          <span className={styles.highlightedSentence}> Fast. Flawless. Effortless.</span>
          This isn’t just convenience — it’s the standard of the future, available today.
        </p>

        <img className={styles.secondtImg} src=' fest1.jpeg' alt='Photo-1' />
      </div>
    </section>
  );
}
