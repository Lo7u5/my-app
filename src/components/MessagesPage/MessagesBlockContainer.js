import {connect} from "react-redux";
import Messages from "./MessagesBlock/Messages";
import {addMessageActionCreator, draftMessageActionCreator} from "../../redux/message-reducer";

const mapStateToProps = (state, {match}) => {
    const {params: {dialogId}} = match;
    let correspondingMessages = state.messagesPage.messages.filter(
        message => message.dialogId === Number(dialogId)
    )
    return {
        messages: correspondingMessages,
        draftMessage: state.messagesPage.draftMessage.message,
        dialogId: Number(dialogId)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: {
            onMessageChange: (draft) => {
                dispatch(draftMessageActionCreator(draft))
            },
            addNewMessage: () => {
                dispatch(addMessageActionCreator())
            }
        }
    }
}

const MessagesPageContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesPageContainer;