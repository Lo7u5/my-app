import React from 'react';
import Friend from './Friend/Friend';

const Friends = (props) => {

    let friends = [
        props.state.contacts[1],
        props.state.contacts[2],
        props.state.contacts[3]
    ]

    let contactSide = friends.map(friend => <Friend
        name={friend.name}
        profilePicture={friend.profilePicture}
        id={friend.id}
        key={friend.id}/>)

    return (
        <div className='inline-flex items-baseline space-x-2'>
            {contactSide}
        </div>
    )
}

export default Friends;