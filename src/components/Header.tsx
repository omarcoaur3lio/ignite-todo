import styles from './Header.module.css';
import logoImg from '../assets/logo.svg';

export function Header() {
    return(
        <header className={styles.container}>
            <img src={logoImg} alt='Ignite ToDo logo' />
        </header>
    )
}