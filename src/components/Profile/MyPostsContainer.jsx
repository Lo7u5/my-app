import React from 'react';
import {addPostActionCreator, draftPostActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

export default connect(mapStateToProps, {draftPostActionCreator, addPostActionCreator})(MyPosts);