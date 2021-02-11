import React from 'react';
import s from './../Messages.module.css';
import MessageItem from './../MessageItem/MessageItem';
import {addMessageActionCreator, draftMessageActionCreator} from "../../../redux/message-reducer";


const MessageElements = (props) => {

    let messageElements = props.elementsState.map(
        (message) => <MessageItem
            message={message.message}
            messageAuthor={message.messageAuthor}
            key={message.id}/>
    )

    let onMessageChange = (draft) => {
        let newMessage = draft.target.value;
        props.dispatch(draftMessageActionCreator({
            message: newMessage,
            dialogId: props.dialogId,
            messageAuthor: 1
        }))
    }

    let addNewMessage = (newMessage) => {
        if (props.state.draftMessage.message !== '')
            props.dispatch(addMessageActionCreator())
        newMessage.target.focus()
    }

    return (
        <div className={s.messages}>
            {messageElements}
            <div>
                <textarea
                    onChange={onMessageChange}
                    value={props.state.draftMessage.message}
                    placeholder='Send message' cols='50'/>
            </div>
            <div>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    )
}

export default MessageElements;