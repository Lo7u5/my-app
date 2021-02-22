import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.state.posts.map(post => <Post
        message={post.message} likeCount={post.likeCount} key={post.id}/>)

    let onPostChange = (draft) => {
        props.onPostChange(draft)
    }

    let addNewPost = () => {
        props.addNewPost()
        document.getElementById('postTextArea').focus()
    }

    return (
        <div className={s.postArea}>
            <h3>My posts</h3>
            <div>
                <textarea id='postTextArea' onChange={onPostChange} value={props.state.draftPost.message}
                          placeholder='New post'/>
                <div>
                    <button onClick={addNewPost}>
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