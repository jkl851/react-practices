import React from 'react';
import './assets/css/App.css';

export default function() {
    return (
        <div id='App'>
            <h1 className={'Header'}> {`Normal CSS (css-loader options: { modules: false })`} </h1>
        </div>
    )
}