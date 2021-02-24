import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setPageAC,
    setTotalUsersAC,
    setUsersAC,
    toggleIsFetching,
    unfollowAC
} from "../../redux/Users-reducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersClassContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch.toggleIsFetching(true)
        axios.get(`http://localhost:3004/users?_page=${this.props.currentPage}&&_limit=${this.props.pageSize}`)
            .then(response => {
                this.props.dispatch.toggleIsFetching(false)
                this.props.dispatch.setUsers(response.data)
            })
        axios.get("http://localhost:3004/totalUsersCount/")
            .then(response => {
                this.props.dispatch.setTotalUsers(response.data)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.dispatch.toggleIsFetching(true)
        this.props.dispatch.setPage(pageNumber)
        axios.get(`http://localhost:3004/users?_page=${pageNumber}&&_limit=${this.props.pageSize}`)
            .then(response => {
                this.props.dispatch.toggleIsFetching(false)
                this.props.dispatch.setUsers(response.data)
            })
    }

    render() {
        if (this.props.isFetching) {
            return <Preloader/>
        } else {
            return <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          users={this.props.users}
                          follow={this.props.dispatch.follow}
                          unfollow={this.props.dispatch.unfollow}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: {
            follow: (userId) => {
                dispatch(followAC(userId))
            },
            unfollow: (userId) => {
                dispatch(unfollowAC(userId))
            },
            setUsers: (users) => {
                dispatch(setUsersAC(users))
            },
            setPage: (page) => {
                dispatch(setPageAC(page))
            },
            setTotalUsers: (users) => {
                dispatch(setTotalUsersAC(users))
            },
            toggleIsFetching: (isFetching) => {
                dispatch(toggleIsFetching(isFetching))
            }
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer);

export default UsersContainer;