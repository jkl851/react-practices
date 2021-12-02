import React, { useState } from "react";
import CardList from "./CardList";
import styles from './assets/css/KanbanBoard.css';

import data from './assets/json/data.json';

export default function() {
    const [cards, setCards] = useState(data);
    
    return(
        <div className={styles.KanbanBoard}>
            <CardList key='ToDo' title={'ToDo'} cards={ cards.filter((card) => card.status === 'ToDo') }/>
            <CardList key='Doing' title={'Doing'} cards={ cards.filter((card) => card.status === 'Doing') }/>
            <CardList key='Done' title={'Done'} cards={ cards.filter((card) => card.status === 'Done') }/>
        </div>
    )
}