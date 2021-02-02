import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.data.map(post => <Post message={post.message} likeCount={post.likeCount} />)

    return (
        <div className={s.postArea}>
            <p>my posts</p>
            <div>
                <textarea placeholder='New post'></textarea>
                <div>
                    <button>
                        Add post
                    </button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;