import React, {useState, useRef, useEffect} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
    let isFetching = false;
    const outterRef = useRef(null);
    const innerRef = useRef(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => { 
        fetchMessages();
    }, []);

    const notifyMessage = {
        add: async function(message) {
            try {
                const response = await fetch('/api', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(message)
                });
    
                if(!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
    
                const json = await response.json();
    
                if(json.result !== 'success') {
                    throw json.message;
                }
    
                setMessages([json.data, ...messages]);
            } catch(err) {
                console.error(err);
            }           

        },
        delete: function(no) {
            setMessages(messages.filter(message => message.no !== no));
        }
    }

    const fetchMessages = async() => {
        if(isFetching) {
            return;
        }

        try {
            isFetching = true;

            const startNo = messages.length == 0 ? 0 : messages[messages.length-1].no;
            const response = await fetch(`/api/${startNo}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw json.message;
            }

            setMessages([...messages, ...json.data]);
            isFetching = false;
        } catch(err) {
            console.error(err);
        }
    };

    return (
        <div
            ref={outterRef} 
            className={styles.ScrollOuter}
            onScroll={e => {
                if(outterRef.current.scrollTop + outterRef.current.clientHeight > innerRef.current.clientHeight) {
                    fetchMessages();
                }
            }}>
            <div ref={innerRef}>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList messages={messages} notifyMessage={notifyMessage}/>
                </div>
            </div>
        </div>
    );
}