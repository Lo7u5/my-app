import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) =>{
    return {
        state: state.messagesPage
    }
}
const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;