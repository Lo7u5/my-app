import React from "react";
import MessageItem from "./MessageItems/MessageItem";

const Messages = (props) => {
  let messageElements = props.messages.map((message) => (
    <MessageItem
      message={message.message}
      messageAuthor={message.messageAuthor}
      key={message.id}
    />
  ));

  let onMessageChange = (draft) => {
    let newMessage = {
      message: draft.target.value,
      dialogId: props.dialogId,
      messageAuthor: 1,
    };
    props.draftMessageActionCreator(newMessage);
  };

  let addNewMessage = () => {
    props.addMessageActionCreator();
    document.getElementById("messageTextArea").focus();
  };

  return (
    <div className="p-5 col-span-3 sm:col-auto">
      {messageElements}
      <div>
        <textarea
          id="messageTextArea"
          onChange={onMessageChange}
          value={props.draftMessage}
          placeholder="Send message"
        />
      </div>
      <div>
        <button className="btn" onClick={addNewMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;
