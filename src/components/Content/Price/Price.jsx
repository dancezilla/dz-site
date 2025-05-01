import styles from "../Price/Price.module.scss";

export function Price() {
  return (
    <section id='price' className={styles.price}>
      <div className='container'>
        <h1 className={styles.header}>Our Plans</h1>
      </div>
    </section>
  );
}
