import React from 'react';
import s from './Messages.module.css';
import Contact from './Contact/Contact';
import MessageElements from './MessageElements/MessageElements';
import {Route} from 'react-router-dom';

const Messages = (props) => {

    let contactElements = props.state.messagesPage.contacts.map(contact => <Contact name={contact.name} id={contact.id}
                                                                                    profilePicture={contact.profilePicture}
                                                                                    key={contact.id}/>)

    let contactsAmount = contactElements.length;

    let messagesById = [];

    for (let i = 1; i <= contactsAmount; i++) {
        let messagesFilter = props.state.messagesPage.messages.filter((message) => message.dialogId === i);
        messagesById.push({
            id: i,
            messageFit: messagesFilter
        })
    }

    let messageElements = messagesById.map(
        (mess) => <Route
            path={'/messages/' + mess.id}
            render={() => <MessageElements elementsState={mess.messageFit}
                                           dialogId={mess.id}
                                           state={props.state}
                                           dispatch={props.dispatch}/>}
            key={mess.id}
        />
    )

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