import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.logo}>DANCEZILLA</p>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href='#about'>About</a>
          </li>
          <li className={styles.navItem}>
            <a href='#pricing'>Pricing</a>
          </li>
          <li className={styles.navItem}>
            <a href='#gallery'>Gallery</a>
          </li>
          <li className={styles.navItem}>
            <a href='#docs'>Docs</a>
          </li>
        </ul>
      </nav>
      <div className={styles.buttonsSection}>
        <button className={styles.buttons}>GET APP</button>
        <button className={styles.buttons}>SIGN IT</button>
      </div>
    </header>
  );
}
