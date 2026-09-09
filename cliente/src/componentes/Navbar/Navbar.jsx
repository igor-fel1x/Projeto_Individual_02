import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2>Sistema Imobiliario </h2>
      <div className={styles.links}>
        <Link to="/cadastrar" className={styles.navLink}>Cadastrar</Link>
        <Link to="/" className={styles.navLink}>Buscar Imóveis</Link>
      </div>
    </nav>
  );
}

export default Navbar;