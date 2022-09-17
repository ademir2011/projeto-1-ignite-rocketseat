import styles from './Todo.module.css';
import { Card } from './Card';

export function Todo() {

    const elements = [
        {
            title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            checked: true
        },
        {
            title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            checked: false
        },
        {
            title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            checked: false
        },
        {
            title: 'Inro auctor neque turpis turpis seis vel sed fames integer.',
            checked: false
        }

    ];

    return (
        <div className={styles.wrapper}>
            <header className={styles.topHeader}>
                <div className={styles.createdTodo}>
                    <span className={styles.createdTodoText}>Tarefas criadas</span>
                    <span className={styles.badge}>5</span>
                </div>
                <div className={styles.finishTodo}>
                    <span className={styles.finishTodoText}>Concluídas</span>
                    <span className={styles.badge}>2 de 5</span>
                </div>
            </header>
            {
                elements.map((element) => {
                    return (
                        <Card title={element.title} checked={element.checked} />
                    );
                })
            }
        </div>
    );
}