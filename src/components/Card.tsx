import styles from './Card.module.css';
import { Trash } from 'phosphor-react';

interface CardInfo {
    title: String,
}

export function Card({ title }: CardInfo) {

    return (
        <div className={styles.card}>
            <input className={styles.cb} type="checkbox" />
            <span className={styles.cardText}>{title}</span>
            <span className={styles.trashIcon}>
                <Trash size={24} />
            </span>
        </div>
    );

}