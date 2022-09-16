import styles from './Search.module.css';
import { PlusCircle } from 'phosphor-react';

export function Search() {
    return (
        <div className={styles.wrapper} >
            <input
                className={styles.searchInput}
                placeholder="Adicionar uma nova tarefa"
            />
            <button className={styles.searchButton}>
                <span>
                    Criar
                </span>
                <span className={styles.buttonIcon}>
                    <PlusCircle size={15.97} />
                </span>
            </button>
        </div>
    );
}