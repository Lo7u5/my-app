import React from 'react';
import {connect} from "react-redux";
import Messages from "./Messages";
import {addMessageActionCreator, draftMessageActionCreator} from "../../redux/message-reducer";

const mapStateToProps = (state) =>{
    return {
        state: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        dispatch: {
            onMessageChange: (draft) => {
                dispatch(draftMessageActionCreator({
                    message: draft.draft,
                    dialogId: draft.dialogId,
                    messageAuthor: 1
                }))
            },
            addNewMessage: () => {
                dispatch(addMessageActionCreator())
            }
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;