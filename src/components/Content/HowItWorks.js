import styles from "./HowItWorks.module.css";
import RuleBlock from "./components/RuleBlock";

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <h1>How it works?</h1>
      <div className={styles.blocks}>
        <RuleBlock
          step="Step 1:"
          title="Create a Competition"
          description="Open the app, set the parameters, and add participants. It’s intuitive — you’ll get it done in moments."
        />
        <RuleBlock
          step="Step 2:"
          title="Start Judging"
          description="With a single tap, select the competition and dive into the evaluation process."
          isOrangeBlock={true}
          isOrangeText={true}
        />
        <RuleBlock
          step="Step 3:"
          title="Score Effortlessly"
          description="One tap, and the scores are locked in. The app takes care of all the calculations for you."
        />
        <RuleBlock
          step="Step 4:"
          title="Get Instant Results"
          description="Final scores and rankings appear immediately. Fast. Accurate. Flawless."
          isOrangeBlock={true}
          isOrangeText={true}
        />
      </div>
    </section>
  );
}
