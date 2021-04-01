import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  setPageAC,
  setTotalUsersAC,
  setUsersAC,
  toggleIsFetchingAC,
  unfollowAC,
} from "../../redux/Users-reducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetchingAC(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleIsFetchingAC(false);
        this.props.setUsersAC(response.data.items);
        this.props.setTotalUsersAC(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetchingAC(true);
    this.props.setPageAC(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleIsFetchingAC(false);
        this.props.setUsersAC(response.data.items);
      });
  };

  follow = (userId) => {
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {},
        {
          withCredentials: true,
          headers: {
            "API-KEY": "1569f6d3-2d9d-4b82-ba22-7f7357ce32b1",
          },
        }
      )
      .then((responce) => {
        if (responce.data.resultCode === 0) {
          this.props.followAC(userId);
        }
      });
  };

  unfollow = (userId) => {
    axios
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {
          "API-KEY": "1569f6d3-2d9d-4b82-ba22-7f7357ce32b1",
        },
      })
      .then((responce) => {
        if (responce.data.resultCode === 0) {
          this.props.unfollowAC(userId);
        }
      });
  };

  render() {
    if (this.props.isFetching) {
      return <Preloader />;
    } else {
      return (
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          follow={this.follow}
          unfollow={this.unfollow}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  followAC,
  unfollowAC,
  setUsersAC,
  setPageAC,
  setTotalUsersAC,
  toggleIsFetchingAC,
})(UsersContainer);
