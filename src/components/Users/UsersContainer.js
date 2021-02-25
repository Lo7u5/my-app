import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setPageAC,
    setTotalUsersAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/Users-reducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersClassContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetchingAC(false)
                this.props.setUsersAC(response.data.items)
                this.props.setTotalUsersAC(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetchingAC(true)
        this.props.setPageAC(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetchingAC(false)
                this.props.setUsersAC(response.data.items)
            })
    }

    render() {
        if (this.props.isFetching) {
            return <Preloader/>
        } else {
            return <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          users={this.props.users}
                          follow={this.props.followAC}
                          unfollow={this.props.unfollowAC}
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


export default connect(mapStateToProps, {
    followAC,
    unfollowAC,
    setUsersAC,
    setPageAC,
    setTotalUsersAC,
    toggleIsFetchingAC
})(UsersClassContainer);