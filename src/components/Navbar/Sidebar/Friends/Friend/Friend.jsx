import React from 'react';
import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.main}>
            <img src={props.profilePicture} alt='ava'  width='50px' className={s.ava}/>
            <span className={s.name}>{props.name}</span>
        </div>

    )
}

export default Friend;