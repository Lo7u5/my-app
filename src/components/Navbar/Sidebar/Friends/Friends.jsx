import React from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.css'

const Friends = (props) =>{
    let friends = [
        props.state.messagesPage.contacts[1],
        props.state.messagesPage.contacts[2],
        props.state.messagesPage.contacts[3],
    ]
    let contactSide = friends.map(friend => <Friend name={friend.name} profilePicture={friend.profilePicture} key={friend.id}/>)
    return (
        <div className={s.main}>
            {contactSide}
        </div>
    )
}

export default Friends;