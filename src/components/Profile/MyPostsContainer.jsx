import React from 'react';
import {addPostActionCreator, draftPostActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//
//     let onPostChange = (draft) => {
//         let newPost = draft.target.value;
//         props.dispatch(draftPostActionCreator({message: newPost})
//         )
//     }
//
//     let addNewPost = () => {
//         if (props.state.draftPost.message !== '')
//             props.dispatch(addPostActionCreator())
//     }
//
//     let postState = props.state;
//
//     return (<MyPosts state={postState} onPostChange={onPostChange} addNewPost={addNewPost}/>
//     );
// }

const mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (draft) => {
            let newPost = draft.target.value;
            dispatch(draftPostActionCreator({message: newPost}))
        },
        addNewPost: () => {
                dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;