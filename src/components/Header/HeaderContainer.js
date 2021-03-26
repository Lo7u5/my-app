import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthDataAC, setMyProfileAC } from "../../redux/auth-reducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthDataAC(id, email, login);
        }
      });
    if (this.props.auth.id) {
      axios
        .get(
          "https://social-network.samuraijs.com/api/1.0/profile/" +
            this.props.auth.id
        )
        .then((response) => {
          this.props.setMyProfileAC(response.data);
        });
    }
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { setAuthDataAC, setMyProfileAC })(
  HeaderContainer
);
