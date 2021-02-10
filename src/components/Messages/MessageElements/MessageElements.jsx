import React from 'react';
import s from './../Messages.module.css';
import MessageItem from './../MessageItem/MessageItem';
import {addMessageActionCreator, draftMessageActionCreator} from "../../../redux/state";


const MessageElements = (props) => {

    let messageElements = props.elementsState.map(
        (message) => <MessageItem
            message={message.message}
            messageAuthor={message.messageAuthor}
            key={message.id}/>
    )

    let newMessage = React.createRef();

    let onMessageChange = () => {
        props.dispatch(draftMessageActionCreator({
                message: newMessage.current.value,
                dialogId: props.dialogId,
                messageAuthor: 1
            }))
    }

    let addNewMessage = () => {
        if (props.state.messagesPage.draftMessage.message !== '')
            props.dispatch(addMessageActionCreator())
        newMessage.current.focus()
    }

    return (
        <div className={s.messages}>
            {messageElements}
            <div>
                <textarea
                    onChange={onMessageChange}
                    ref={newMessage}
                    value={props.state.messagesPage.draftMessage.message}
                    placeholder='Send message' cols='50'/>
            </div>
            <div>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    )
}

export default MessageElements;