import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                <div className={`${s.contact} ${s.active}`}>Sasha</div>
                <div className={s.contact}>Masha</div>
                <div className={s.contact}>Dasha</div>
                <div className={s.contact}>Vasya</div>
                <div className={s.contact}>Andrey</div>
            </div>
            <div className={s.messages}>
                <div className={s.messageItem}>Hey</div>
                <div className={s.messageItem}>Howdy</div>
                <div className={s.messageItem}>Lol</div>
            </div>
        </div>
    )
}

export default Messages;