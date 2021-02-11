import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, draftPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postElements = props.state.posts.map(post => <Post
        message={post.message} likeCount={post.likeCount} key={post.id}/>)

    let onPostChange = (draft) => {
        let newPost = draft.target.value;
        props.dispatch(draftPostActionCreator({message: newPost})
        )
    }

    let addNewPost = (newPost) => {
        if (props.state.draftPost.message !== '')
            props.dispatch(addPostActionCreator())
        newPost.target.focus();
    }

    return (
        <div className={s.postArea}>
            <h3>my posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.state.draftPost.message}
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