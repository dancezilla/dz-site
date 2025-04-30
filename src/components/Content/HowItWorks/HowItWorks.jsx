import styles from "./HowItWorks.module.scss";

const blocks = [
  {
    img: "/steps-img/step-event.png",
    steps: [
      {
        step: "Step 1:",
        title: "Create a Competition",
        description:
          "Open the app, set the parameters, and add participants. It’s intuitive — you’ll get it done in moments.",
      },
      {
        step: "Step 2:",
        title: "Start Judging",
        description: "With a single tap, select the competition and dive into the evaluation process.",
      },
    ],
  },
  {
    img: "/steps-img/step-circle-right.png",
    steps: [
      {
        step: "Step 3:",
        title: "Score Effortlessly",
        description: "One tap, and the scores are locked in. The app takes care of all the calculations for you.",
      },
      {
        step: "Step 4:",
        title: "Get Instant Results",
        description: "Final scores and rankings appear immediately. Fast. Accurate. Flawless.",
      },
    ],
  },
];
export function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className='container'>
        <h1 className={styles.header}>ALL LOGIC. NO NOISE.</h1>
        <div className={styles.blocks}>
          {blocks.map((block, i) => (
            <div key={i} className={`${styles.block}  ${i % 2 === 1 ? styles.reverse : ""}`}>
              <img src={block.img} alt={"text"} />
              <div className={styles.blockContent}>
                {block.steps.map((item, i) => (
                  <div className={styles.singleStep} key={i}>
                    <p className={styles.step}>{item.step}</p>
                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
