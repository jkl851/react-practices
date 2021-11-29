import React from 'react';
import './assets/css/App.css';

export default function() {
    return (
        <div id='App'>
            <h1 className={'Header'}> {`Normal CSS (css-loader options: {modules: true})`} </h1>
            {// .Header 대신 .UM0VRsAb5EPNP2spVqfp 값으로 들어감
            }
        </div>
    )
}