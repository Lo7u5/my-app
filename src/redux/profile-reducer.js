const addPost = 'ADD-POST';
const draftPostUpdate = 'DRAFT-POST-UPDATE';
const likes = () => {
    return Math.floor((Math.random() * 10) + 1)
}

let initialState = {
        posts: [
            {
                id: 1,
                message: 'hey yo',
                likeCount: 15
            },
            {
                id: 2,
                message: 'it is happening',
                likeCount: 1
            },
            {
                id: 3,
                message: 'hohoho',
                likeCount: 11
            }
        ],
        draftPost:
            {
                message: ''
            }
};

const profileReducer = (state = initialState, action) => {
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