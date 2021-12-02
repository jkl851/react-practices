import React from 'react';
import TaskList from './TaskList';
import styles from './assets/scss/Card.scss';

export default function({title, description, tasks}) {
    return (
        <div className={styles.Card}>
            <div className={styles.Card__Title}>{title}</div>
            <div className={styles.Card__Details}>
                {description}
            </div>
            <TaskList tasks={tasks} />
        </div>        
    );
}