import styles from "./RuleBlock.module.scss";

export default function RuleBlock({
  step,
  title,
  description,
  isOrangeBlock,
  isOrangeText,
}) {
  return (
    <div
      className={`${styles.block} ${isOrangeBlock ? styles.blockOrange : ""}`}
    >
      <p className={`${styles.step} ${isOrangeText ? styles.stepOrange : ""}`}>
        {step}
      </p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
