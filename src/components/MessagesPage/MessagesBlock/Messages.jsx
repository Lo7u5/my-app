import React from "react";
import s from "./Messages.module.css";
import MessageItem from "./MessageItems/MessageItem";


const Messages = (props) => {

    let messageElements = props.messages.map(
        (message) => <MessageItem
            message={message.message}
            messageAuthor={message.messageAuthor}
            key={message.id}/>
    )

    let onMessageChange = (draft) => {
        let newMessage = {message: draft.target.value, dialogId: props.dialogId, messageAuthor: 1};
        props.dispatch.onMessageChange(newMessage)
    }

    let addNewMessage = () => {
        props.dispatch.addNewMessage()
        document.getElementById('messageTextArea').focus()
    }

    return (
        <div className={s.messages}>
            {messageElements}
            <div>
                <textarea
                    id='messageTextArea'
                    onChange={onMessageChange}
                    value={props.draftMessage}
                    placeholder='Send message' cols='50'/>
            </div>
            <div>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages;