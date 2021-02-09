// храним все нужные данные тут, потом передаем через props
let store = {
    _state: {
    profilePage: {
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
        draftPost: [
            {
                id: 0,
                message: '',
                likeCount: 0
            }
        ]
    },
    messagesPage: {
        contacts: [
            {
                id: 1,
                name: 'KonVysh',
                profilePicture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZNF3UzwEu_aKaw6Jh8wdrwHaNK%26pid%3DApi&f=1'
            },
            {
                id: 2,
                name: 'Sasha',
                profilePicture: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {
                id: 3,
                name: 'Dasha',
                profilePicture: 'https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg'
            },
            {
                id: 4,
                name: 'Masha',
                profilePicture: 'https://i.pinimg.com/236x/7c/ab/18/7cab184c5e791921ed607e23458492b6.jpg'
            }
        ],
        messages: [
            {
                id: 1,
                message: 'Hey',
                dialogId: 2,
                messageAuthor: 2
            },
            {
                id: 2,
                message: 'Howdy',
                dialogId: 3,
                messageAuthor: 3
            },
            {
                id: 3,
                message: 'Lol',
                dialogId: 4,
                messageAuthor: 4
            },
            {
                id: 4,
                message: 'pnh',
                dialogId: 2,
                messageAuthor: 1
            },
            {
                id: 5,
                message: 'pnh',
                dialogId: 3,
                messageAuthor: 1
            },
            {
                id: 6,
                message: 'pnh',
                dialogId: 4,
                messageAuthor: 1
            },
            {
                id: 7,
                message: 'heyoooo',
                dialogId: 1,
                messageAuthor: 1
            }
        ],
        draftMessage: {
            id: 0,
            message: '',
            dialogId: 0,
            messageAuthor: 0
        }
    }
    },
    getState() {
      return this._state
    },
    _callSubscriber() {
    },
    addMessage() {
        let newId = this._state.messagesPage.messages[this._state.messagesPage.messages.length - 1].id + 1;
        let newMessage = {
            id: newId,
            message: this._state.messagesPage.draftMessage.message,
            dialogId: this._state.messagesPage.draftMessage.dialogId,
            messageAuthor: this._state.messagesPage.draftMessage.messageAuthor
        };
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.draftMessage = {
            id: 0,
            message: '',
            dialogId: 0,
            messageAuthor: 0
        };
        this._callSubscriber();
    },
    draftMessageUpdate(newDraft) {
        this._state.messagesPage.draftMessage = newDraft;
        this._callSubscriber();
    },
    addPost() {
        let newId = this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1;
        let newPost = {
            id: newId,
            message: this._state.profilePage.draftPost.message,
            likeCount: this._state.profilePage.draftPost.likeCount
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.draftPost = {
            id: 0,
            message: '',
            likeCount: 0
        };
        this._callSubscriber();
    },
    draftPostUpdate(newDraft) {
        this._state.profilePage.draftPost = newDraft;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
};

export default store;