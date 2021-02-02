import React from 'react';
import s from './Messages.module.css';
import Contact from './Contact/Contact';
import MessageItem from './MessageItem/MessageItem';

const Messages = (props) => {

    let contactElements = props.messagesState.contacts.map(contact => <Contact name={contact.name} id={contact.id} key={contact.id} />)
    let messageElements = props.messagesState.messages.map(message => <MessageItem message={message.message} key={message.id} />)

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