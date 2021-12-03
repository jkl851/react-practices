import React, {useState} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

import data from './assets/json/data.json';

export default function Guestbook() {
    const [messages, setMessages] = useState(data);
    const notifyMessage = {
        add: function(message) {
            console.log('ajax posting.....');
            // 성공했다고 가정
            message.no = 10;
            message.password = '';

            setMessages([message, ...messages]);
        },
        delete: function(no) {
            setMessages(messages.filter(message => message.no !== no));
        }
    }

    return (
        <div className={styles.ScrollOuter}>
            <div>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage} />
                    <MessageList messages={messages} notifyMessage={notifyMessage}/>
                </div>
            </div>
        </div>
    );
}