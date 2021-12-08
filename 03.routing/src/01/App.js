import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState('');

    useEffect( () => {
        const handleHashChange= () => setRoute(window.location.hash.substr(1));

        window.addEventListener('hashchange', handleHashChange);
        return ()=> {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (() => {
        switch(route) {
            case '/' :
                return <Main />;
            case '/guestbook' :
                return <Guestbook />;
            case '/gallery' :
                return <Gallery />;
            default:
                return null;
        }
    })();
}