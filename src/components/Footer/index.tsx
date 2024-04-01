import styles from './footer.module.css';
import logoImage from '../../assets/cubos-burger.png';

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <img src={logoImage} className={styles.logoImage} alt="logo cubos burger" />
      </div>
    </footer>
  )
}