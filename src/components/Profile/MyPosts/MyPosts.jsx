import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.state.profilePage.posts.map(post => <Post message={post.message} likeCount={post.likeCount} key={post.id} />)

    return (
        <div className={s.postArea}>
            <h3>my posts</h3>
            <div>
                <textarea placeholder='New post' />
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