import styles from './header.module.css';
import logoImage from '../../assets/cubos-burger.png';
import { NavLink } from 'react-router-dom';

export function Header(): JSX.Element {

  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <NavLink to='/'>
          <img src={logoImage} className={styles.logoImage} alt="logo cubos burger" />
        </NavLink>
        <NavLink to="/cart" className={styles.goToCart}>
          Carrinho
        </NavLink>
      </div>
    </header>
  )
}