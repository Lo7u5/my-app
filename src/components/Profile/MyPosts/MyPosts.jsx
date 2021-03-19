import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.profile.posts.map(post => <Post
        message={post.message} likeCount={post.likeCount} key={post.id} profile={props.profile.userProfile}/>)

    let onPostChange = (draft) => {
        let newPost = {message: draft.target.value};
        props.draftPostActionCreator(newPost)
    }

    let addNewPost = () => {
        props.addPostActionCreator()
        document.getElementById('postTextArea').focus()
    }

    return (
        <div className='p-5'>
            <h3 className='text-myGray-darkIce'>My posts</h3>
            <div>
                <textarea id='postTextArea' onChange={onPostChange} value={props.profile.draftPost.message}
                          placeholder='New post'/>
                <div>
                    <button className='btn m-2 md:m-5' onClick={addNewPost}>
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