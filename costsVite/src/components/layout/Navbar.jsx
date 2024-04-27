import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Container from "./Container";
import Logo from "../../assets/favicon.png";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/empresa">Empresa</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
