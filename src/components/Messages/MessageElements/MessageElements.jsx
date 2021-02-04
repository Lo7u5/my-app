import React from 'react';
import s from './../Messages.module.css';
import MessageItem from './../MessageItem/MessageItem';


const MessageElements = (props) => {

    let messageElements = props.elementsState.map(
        (message) =>
            <MessageItem message={message.message} messageAuthor={message.messageAuthor} key={message.id} />
    )

    return (
            <div className={s.messages}>
                {messageElements}
            </div>
    )
}

export default MessageElements;