import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Sidebar from './Sidebar/Sidebar'

const Navbar = (props) => {
    return (
        <div className={s.main}>
            <nav>
                <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>Profiles</NavLink></div>
                <div className={s.item}><NavLink to='/messages' activeClassName={s.active}>Messages</NavLink></div>
                <div className={s.item}><NavLink to='/news' activeClassName={s.active}>News</NavLink></div>
                <div className={s.item}><NavLink to='/music' activeClassName={s.active}>Music</NavLink></div>
                <div className={s.item}><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></div>
            </nav>
            <div className={s.sidebar}>
                <Sidebar state={props.state}/>
            </div>
        </div>
    );
}

export default Navbar;