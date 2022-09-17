import styles from './Card.module.css';
import { Trash } from 'phosphor-react';

interface CardInfo {
    title: String,
    checked: boolean
}

export function Card({ title, checked }: CardInfo) {

    return (
        <div className={styles.card}>
            <input className={styles.cb} type="checkbox" checked={checked} />
            <span className={checked ? styles.cardTextChecked : styles.cardText}>{title}</span>
            <Trash className={styles.trashIcon} />
        </div>
    );

}