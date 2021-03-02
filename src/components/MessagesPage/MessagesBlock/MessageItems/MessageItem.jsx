import React from 'react';

const MessageItem = (props) => {
    if (props.messageAuthor === 1) {
        return (
            <div className='m-2 p-2 text-myGray-darkIce border border-myGray-darkIce rounded-2xl text-right'>
                {props.message}
            </div>
        )
    } else {
        return (
            <div className='m-2 p-2 text-myGray-darkIce border border-myGray-lightIce rounded-2xl'>
                {props.message}
            </div>
        )
    }
}

export default MessageItem;