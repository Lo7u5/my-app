import React from 'react';

const Post = (props) => {
    return (
        <div className='text-myGray-darkIce p-2 grid grid-cols-2 sm:grid-cols-app'>
            <img className='rounded-full place-self-center shadow-myBoxShadow w-20 h-20 object-cover'
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.popjustice.com%2Fwp-content%2Fuploads%2F2020%2F09%2FAva-Max-2020-press.jpg&f=1&nofb=1'
                alt='ava' />
            <div className='rounded-lg pl-2 border border-myGray-darkIce'>
                {props.message}
                <br />
                {props.likeCount}
                <span className='ml-1'>
                    Likes
                </span>
            </div>
        </div>
    );
}

export default Post;