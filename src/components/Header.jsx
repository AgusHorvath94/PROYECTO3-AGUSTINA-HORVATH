
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/Historial" >
        <span>📋</span>
      </Link>
      <h1>Seguros del hogar 🏡</h1>
    </div>
  );
}