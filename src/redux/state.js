let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'hey yo', likeCount: '15' },
            { id: 2, message: 'it is happening', likeCount: '1' },
            { id: 3, message: 'hohoho', likeCount: '11' }
        ]
},
    messagesPage: {
        contacts: [
            { id: 1, name: 'KonVysh', profilePicture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZNF3UzwEu_aKaw6Jh8wdrwHaNK%26pid%3DApi&f=1' },
            { id: 2, name: 'Sasha', profilePicture: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' },
            { id: 3, name: 'Dasha', profilePicture: 'https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg' },
            { id: 4, name: 'Masha', profilePicture: 'https://i.pinimg.com/236x/7c/ab/18/7cab184c5e791921ed607e23458492b6.jpg' }
        ],
        messages: [
            { id: 1, message: 'Hey', dialogId: 2, messageAuthor: 2 },
            { id: 2, message: 'Howdy', dialogId: 3, messageAuthor: 3 },
            { id: 3, message: 'Lol', dialogId: 4, messageAuthor: 4 },
            { id: 3, message: 'pnh', dialogId: 2, messageAuthor: 1 },
            { id: 3, message: 'pnh', dialogId: 3, messageAuthor: 1 },
            { id: 3, message: 'pnh', dialogId: 4, messageAuthor: 1 },
            { id: 3, message: 'heyoooo', dialogId: 1, messageAuthor: 1 }
        ]
}
};

export default state;