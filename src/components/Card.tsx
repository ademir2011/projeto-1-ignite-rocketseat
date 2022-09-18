import styles from './Card.module.css';
import { Trash, TwitterLogo } from 'phosphor-react';
import { ChangeEventHandler, FormEventHandler } from 'react';

interface myProps {
    id: number,
    title: string,
    checked: boolean
    handlerCbChange: ChangeEventHandler,
    handlerDelete: Function,
}

export function Card({ id, title, checked, handlerCbChange, handlerDelete }: myProps) {

    return (
        <div className={styles.card}>
            <input
                className={styles.cb}
                type="checkbox"
                checked={checked}
                onChange={handlerCbChange}
                name={id.toString()}
            />
            <span className={checked ? styles.cardTextChecked : styles.cardText}>{title}</span>
            <Trash className={styles.trashIcon} type='submit' onClick={() => handlerDelete(id)} />
        </div>
    );

}