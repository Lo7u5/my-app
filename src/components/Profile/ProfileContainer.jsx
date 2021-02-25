import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0//profile/15297')
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
    }

    render() {
        return (
            <main>
                <Profile {...this.props} profile={this.props.profile}/>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({profile: state.profilePage.userProfile})

export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer);