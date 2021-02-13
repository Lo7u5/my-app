import React from 'react';
import s from './../Messages.module.css';
import MessageItem from './../MessageItem/MessageItem';


const MessageElements = (props) => {

    let messageElements = props.elementsState.map(
        (message) => <MessageItem
            message={message.message}
            messageAuthor={message.messageAuthor}
            key={message.id}/>
    )

    let onMessageChange = (draft) => {
        let newMessage = {draft: draft.target.value, dialogId: props.dialogId};
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