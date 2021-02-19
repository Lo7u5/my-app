import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import Sidebar from './Sidebar/Sidebar'

const Navbar = (props) => {
    return (
        <div className={s.main}>
            <nav>
                <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
                <div className={s.item}><NavLink to='/messages' activeClassName={s.active}>Messages</NavLink></div>
                <div className={s.item}><NavLink to='/news' activeClassName={s.active}>News</NavLink></div>
                <div className={s.item}><NavLink to='/music' activeClassName={s.active}>Music</NavLink></div>
                <div className={s.item}><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></div>
            </nav>
            <div className={`${s.item} ${s.step}`}><NavLink to='/users' activeClassName={s.active}>Find Users</NavLink></div>
            <div className={s.sidebar}>
                <Sidebar/>
            </div>
        </div>
    );
}

export default Navbar;