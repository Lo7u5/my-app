const addPost = 'ADD-POST';
const draftPostUpdate = 'DRAFT-POST-UPDATE';
const likes = () => {
    return Math.floor((Math.random() * 10) + 1)
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newId = state.posts[state.posts.length - 1].id + 1;
            let newPost = {
                id: newId,
                message: state.draftPost.message,
                likeCount: likes()
            };
            state.posts.push(newPost);
            state.draftPost = {message: ''};
            return state;
        case draftPostUpdate:
            state.draftPost = action.newDraft;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: addPost})
export const draftPostActionCreator = (newDraft) => ({type: draftPostUpdate, newDraft: newDraft})

export default profileReducer;