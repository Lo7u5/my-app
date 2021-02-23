import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setPageAC, setTotalUsersAC, setUsersAC, unfollowAC} from "../../redux/Users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
            }
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;