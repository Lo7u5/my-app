import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        { id: 1, message: 'hey yo', likeCount: '15' },
        { id: 2, message: 'it is happening', likeCount: '1' }
    ];

    let postElements = postData.map(post => <Post message={post.message} likeCount={post.likeCount} />)

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