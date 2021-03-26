import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  setUserProfileAC,
  draftPostActionCreator,
  addPostActionCreator,
} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.auth.id;
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
      .then((response) => {
        this.props.setUserProfileAC(response.data);
      });
  }

  render() {
    if (this.props.profile.userProfile) {
      return (
        <div>
          <Profile {...this.props} />
        </div>
      );
    } else {
      return <Preloader />;
    }
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage,
  auth: state.auth,
});

let WithRouterDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfileAC,
  draftPostActionCreator,
  addPostActionCreator,
})(WithRouterDataContainer);
