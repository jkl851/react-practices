import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/Message.scss';

export default function Message({no, name, message, notifyDeleteMessage}) {
    
    return (
        <li className={styles.Message}>
            <strong>{name}</strong>
            <p>
                {
                    message && message.split('\n').map((line, index) => index > 0 ? 
                        <span key={`${no}-${index}`}>
                            <br/>
                            {line}
                        </span> :
                        line ) 
                
                }
            </p>
            <strong/>
            <a onClick={ () => notifyDeleteMessage(no) }>삭제</a>
        </li>
    );
}

Message.propTypes = {
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}