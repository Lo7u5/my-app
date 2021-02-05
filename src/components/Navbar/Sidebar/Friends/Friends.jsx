import React from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.css'

const Friends = (props) =>{
    let friends = [
        props.contacts[1],
        props.contacts[2],
        props.contacts[3],
    ]
    let contactSide = friends.map(friend => <Friend name={friend.name} profilePicture={friend.profilePicture} key={friend.id}/>)
    return (
        <div className={s.main}>
            {contactSide}
        </div>
    )
}

export default Friends;