import React from 'react';
import s from './Messages.module.css';
import Contact from './Contact/Contact';
import MessageItem from './MessageItem/MessageItem';

const Messages = (props) => {

    let contactData = [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Dasha' },
        { id: 3, name: 'Masha' }
    ];

    let messageData = [
        { id: 1, message: 'Hey' },
        { id: 2, message: 'Howdy' },
        { id: 3, message: 'Lol' }
    ];

    let contactElements = contactData.map(contact => <Contact name={contact.name} id={contact.id} />)
    let messageElements = messageData.map(message => <MessageItem message={message.message} />)
    
    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                {contactElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Messages;