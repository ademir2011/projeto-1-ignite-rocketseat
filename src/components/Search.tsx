import styles from './Search.module.css';
import { PlusCircle } from 'phosphor-react';
import { FormEventHandler, useState } from 'react';

interface myProps {
    handlerSearchSubmit: FormEventHandler
}
export function Search({ handlerSearchSubmit }: myProps) {

    return (
        <form onSubmit={handlerSearchSubmit}>
            <div className={styles.wrapper} >
                <input
                    name="todo"
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
        </form>

    );
}