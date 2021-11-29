import React from 'react';
import lists from './assets/json/data.json';

import GBAddForm from './GBAddForm';
import GBList from './GBList';
import './assets/css/styles.css';

export default function() {
    return (
      <div className="Guestbook">
          <h1>방명록</h1>
          <GBAddForm />
          <GBList lists={lists} />
      </div>

    )
}