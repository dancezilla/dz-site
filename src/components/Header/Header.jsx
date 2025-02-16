import styles from "../Header/Header.module.scss";

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
            <a href='#gallery'>Gallery</a>
          </li>
          <li className={styles.navItem}>
            <a href='#faq'>FAQ</a>
          </li>
        </ul>
      </nav>
      <button className={styles.buttonGetApp}>Get App</button>
    </header>
  );
}
