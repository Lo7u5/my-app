import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, draftPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.state.profilePage.posts.map(post => <Post
        message={post.message} likeCount={post.likeCount} key={post.id}/>)

    let newPost = React.createRef();

    let onPostChange = () => {
        let randomLike = Math.floor((Math.random() * 10) + 1);
        props.dispatch(draftPostActionCreator({ message: newPost.current.value, likeCount: randomLike })
        )
    }

    let addNewPost = () => {
        if (props.state.profilePage.draftPost.message !== '')
            props.dispatch(addPostActionCreator())
        newPost.current.focus();
    }

    return (
        <div className={s.postArea}>
            <h3>my posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.state.profilePage.draftPost.message} ref={newPost}
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