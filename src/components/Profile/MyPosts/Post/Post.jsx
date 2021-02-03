import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.popjustice.com%2Fwp-content%2Fuploads%2F2020%2F09%2FAva-Max-2020-press.jpg&f=1&nofb=1' alt='ava' />
            {props.message}
            <div>
                {props.likeCount}
                <span>
                    Likes
                </span>
            </div>
        </div>
    );
}

export default Post;