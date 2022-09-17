import styles from './Todo.module.css';
import { Card } from './Card';

export function Todo() {

    const elements = [
        { title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
        { title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
        { title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
        { title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
        { title: 'Integer urna interturpis turpis semper. Duis vel sed fames integer.' }
    ];

    return (
        <div className={styles.wrapper}>
            <header className={styles.topHeader}>
                <div className={styles.createdTodo}>
                    <span className={styles.createdTodoText}>Tarefas Criadas</span>
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
                        <Card title={element.title} />
                    );
                })
            }
        </div>
    );
}