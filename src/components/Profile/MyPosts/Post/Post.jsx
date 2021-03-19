import React from 'react';
import profileAva from '../../../../assets/avatar-placeholder.png';

const Post = (props) => {

    return (
        <div className='text-myGray-darkIce p-2 grid grid-cols-3 sm:grid-cols-app'>
            {props.profile.photos.large ? 
                <img className='rounded-full place-self-center shadow-myBoxShadow w-20 h-20 object-cover' src={props.profile.photos.large} alt='ava'/> : 
                <img className='rounded-full place-self-center shadow-myBoxShadow w-20 h-20 object-cover'
                     src={profileAva}
                     alt='ava'/>}
            <div className='rounded-lg pl-2 border col-span-2 border-myGray-darkIce'>
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