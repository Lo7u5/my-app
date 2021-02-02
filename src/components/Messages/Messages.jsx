import React from 'react';
import s from './Messages.module.css';
import { NavLink } from 'react-router-dom';

const Contact = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.contact}>
            <NavLink to={path} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.messageItem}>
            {props.message}
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                <Contact name='Sasha' id='1' />
                <Contact name='Dasha' id='2' />
                <Contact name='Masha' id='3' />
                <Contact name='Vasya' id='4' />
                <Contact name='Andre' id='5' />
            </div>
            <div className={s.messages}>
                <MessageItem message='Hey' />
                <MessageItem message='Howdy' />
                <MessageItem message='Lol' />
            </div>
        </div>
    )
}

export default Messages;