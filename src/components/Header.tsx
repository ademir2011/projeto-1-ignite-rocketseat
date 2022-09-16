import styles from './Header.module.css';

import logo from '../assets/logo.svg';

export function Header() {
    return (
        <div className={styles.background}>
            <img src={logo}></img>
        </div>
    );
}