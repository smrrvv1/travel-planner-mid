import { Link } from 'react-router';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.header}>
    <Link to="/" className={styles.link}>Главная</Link>
    <Link to="/add" className={styles.link}>Добавить</Link>
  </nav>
);
export default Navbar;