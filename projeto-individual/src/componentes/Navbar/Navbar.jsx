import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2>Sistema Imobiliário</h2>
      </div>
      
      <div className={styles.links}>
        <button className={styles.navLink} >
          Imobiliario
          </button>
        <button className={styles.navLink}>
          Cliente
        </button>
      </div>
    </nav>
  );
}

export default Navbar;