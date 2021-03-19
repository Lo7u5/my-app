import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfileAC, draftPostActionCreator, addPostActionCreator } from "../../redux/profile-reducer";
import Preloader from '../common/Preloader/Preloader';

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/15297')
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
    }

    render() {
        if(this.props.profile.userProfile){
            return (
                <div>
                    <Profile {...this.props} />
                </div>
            );

        } else {
            return <Preloader />
        }
    }
}

const mapStateToProps = (state) => ({ profile: state.profilePage})

export default connect(mapStateToProps, { setUserProfileAC, draftPostActionCreator, addPostActionCreator })(ProfileContainer);