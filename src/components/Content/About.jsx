import styles from "./About.module.scss";

export function About() {
  return (
    <section id='about' className={styles.about}>
      <h1>NEW STANDART OF JUDGING</h1>
      <p className={styles.descriptionApp}>
        <span className={styles.highlightedSentence}>Redefine the rules of judging. </span>
        Our app isn’t just a tool — it’s a new era in dance evaluation. Forget paper, pens, and endless calculations.
        With a single tap, you record scores, and the technology takes care of the rest.
        <br />
        <span className={styles.highlightedSentence}> Fast. Flawless. Effortless.</span>
        This isn’t just convenience — it’s the standard of the future, available today.
      </p>
      <div className={styles.images}>
        <div className={styles.BlockFirst}>
          <img className={styles.FirstImg} src='fest1.jpeg' alt='Photo-1' />
          <img className={styles.SecondtImg} src='fest1.jpeg' alt='Photo-1' />
        </div>
      </div>
    </section>
  );
}
