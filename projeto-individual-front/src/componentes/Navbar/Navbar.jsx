import styles from './Navbar.module.css';



function alterar(){
window.location.href="./"
}

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2>Sistema Imobiliário</h2>
      </div>
      
      <div className={styles.links}>
        <button onClick={alterar} className={styles.navLink} >
          Cadastrar
          </button>
        <button className={styles.navLink}>
          Buscar
        </button>
      </div>
    </nav>
  );
}

export default Navbar;