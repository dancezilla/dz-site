import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h1>Why This App?</h1>
      <p className={styles.descriptionApp}>
        <span className={styles.highlightedSentence}>
          Redefine the rules of judging.
        </span>
        Our app isn’t just a tool — it’s a new era in dance evaluation. Forget
        paper, pens, and endless calculations.
        <br /> With a single tap, you record scores, and the technology takes
        care of the rest.
        <span className={styles.highlightedSentence}>
          {" "}
          Fast. Flawless. Effortless.
        </span>
        <br /> This isn’t just convenience — it’s the standard of the future,
        available today.
      </p>
    </section>
  );
}
