import React from 'react';
import s from './Friend.module.css'
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.main}>
            <NavLink to={path}><img src={props.profilePicture} alt='ava'  width='50px' className={s.ava}/>
            <span className={s.name}>{props.name}</span></NavLink>
        </div>

    )
}

export default Friend;