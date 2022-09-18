import styles from './Todo.module.css';
import { Card } from './Card';
import { ChangeEventHandler } from 'react';

interface myProps {
    elements: Element[]
    totalElements: number,
    amountFinish: number,
    handlerCbChange: ChangeEventHandler
    handlerDelete: Function
}

interface Element {
    id: number,
    title: string,
    checked: boolean
}

export function Todo({ elements, totalElements, amountFinish, handlerCbChange, handlerDelete }: myProps) {

    return (
        <div className={styles.wrapper}>
            <header className={styles.topHeader}>
                <div className={styles.createdTodo}>
                    <span className={styles.createdTodoText}>Tarefas criadas</span>
                    <span className={styles.badge}>{totalElements}</span>
                </div>
                <div className={styles.finishTodo}>
                    <span className={styles.finishTodoText}>Concluídas</span>
                    <span className={styles.badge}>{amountFinish} de {totalElements}</span>
                </div>
            </header>
            {
                elements.map((element) => {
                    return (
                        <Card
                            id={element.id}
                            title={element.title}
                            checked={element.checked}
                            handlerCbChange={handlerCbChange}
                            handlerDelete={handlerDelete}
                        />
                    );
                })
            }
        </div>
    );
}