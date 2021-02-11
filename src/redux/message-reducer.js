const addMessage = 'ADD-MESSAGE';
const draftMessageUpdate = 'DRAFT-MESSAGE-UPDATE';

const messageReducer = (state, action) => {
    switch (action.type) {
        case addMessage:
            let newId = state.messages[state.messages.length - 1].id + 1;
            let newMessage = {
                id: newId,
                message: state.draftMessage.message,
                dialogId: state.draftMessage.dialogId,
                messageAuthor: state.draftMessage.messageAuthor
            };
            state.messages.push(newMessage);
            state.draftMessage = {
                message: '',
                dialogId: 0,
                messageAuthor: 0
            };
            return state;
        case draftMessageUpdate:
            state.draftMessage = action.newDraft;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: addMessage})
export const draftMessageActionCreator = (newDraft) => ({type: draftMessageUpdate, newDraft: newDraft})

export default messageReducer;