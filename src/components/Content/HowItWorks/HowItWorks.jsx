import styles from "./HowItWorks.module.scss";

const blocks = [
  {
    img: "/steps-img/first.png",
    step: "Step 1:",
    title: "Create a Competition",
    description:
      "Open the app, set the parameters, and add participants. It’s intuitive — you’ll get it done in moments.",
  },
  {
    img: "/slider-screen/Screen-2.png",
    step: "Step 2:",
    title: "Start Judging",
    description: "With a single tap, select the competition and dive into the evaluation process.",
  },
  {
    img: "/slider-screen/Screen-3.png",
    step: "Step 3:",
    title: "Score Effortlessly",
    description: "One tap, and the scores are locked in. The app takes care of all the calculations for you.",
  },
  {
    img: "/slider-screen/Screen-4.png",
    step: "Step 4:",
    title: "Get Instant Results",
    description: "Final scores and rankings appear immediately. Fast. Accurate. Flawless.",
  },
];
export function HowItWorks() {
  return (
    <section className={`container ${styles.howItWorks}`}>
      <h1 className={styles.header}>ALL LOGIC. NO NOISE.</h1>
      <div className={styles.blocks}>
        {blocks.map((block, i) => (
          <div key={i} className={`${styles.block} `}>
            <img src={block.img} />
            <div className={styles.blockContent}>
              <p className={styles.step}>{block.step}</p>
              <h2 className={styles.title}>{block.title}</h2>
              <p className={styles.description}>{block.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
