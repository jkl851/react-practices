import React from 'react';
import {NaviLink, NavLink} from 'react-router-dom';
import styles from '../../assets/scss/component/about/Navigation.scss';

const Navigation = () => {
    return (
        <div>
            <nav className={styles.Navigation}>
                <NavLink to={'/about/me'}>Me</NavLink>
                <span/>
                <NavLink to={'/about/location'}>Location</NavLink>
            </nav>
        </div>
    );
};

export default Navigation;