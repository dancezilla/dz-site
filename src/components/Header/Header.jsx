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
            <a href='#overview'>Overview </a>
          </li>
          {/* <li className={styles.navItem}>
            <a href='#gallery'>Gallery</a>
          </li> */}
          {/* <li className={styles.navItem}>
            <a>Docs</a>
          </li> */}
        </ul>
      </nav>
      <div className={styles.buttonsSection}>
        <button
          onClick={() =>
            (window.location.href =
              "mailto:zntu1995@gmail.com?subject=Interested%20in%20working%20with%20us%3F%20Share%20your%20request%20and%20contact%20details%20%E2%80%94%20we%E2%80%99ll%20get%20in%20touch%20soon.")
          }
          className={styles.buttons}
        >
          GET APP
        </button>
        {/* <button
          onClick={() =>
            (window.location.href =
              "mailto:zntu1995@gmail.com?subject=Interested%20in%20working%20with%20us%3F%20Share%20your%20request%20and%20contact%20details%20%E2%80%94%20we%E2%80%99ll%20get%20in%20touch%20soon.")
          }
          className={styles.buttons}
        >
          SIGN IT
        </button> */}
      </div>
    </header>
  );
}
