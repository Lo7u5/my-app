import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3004/users?_page=${this.props.currentPage}&&_limit=${this.props.pageSize}`)
            .then(response => {
                this.props.dispatch.setUsers(response.data)
            })
        axios.get("http://localhost:3004/totalUsersCount/")
            .then(response => {
                this.props.dispatch.setTotalUsers(response.data)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.dispatch.setPage(pageNumber)
        axios.get(`http://localhost:3004/users?_page=${pageNumber}&&_limit=${this.props.pageSize}`)
            .then(response => {
                this.props.dispatch.setUsers(response.data)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            {this.props.users.map(users =>
                <div key={users.id} className={s.usersContainer}>
                    <div className={s.photoAndButton}>
                        <img className={s.photoUser} src={users.photoUrl} alt={users.fullName}/>
                        <div>
                            {users.followed ? <button onClick={() => {
                                    this.props.dispatch.unfollow(users.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.dispatch.follow(users.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.usersInfo}>
                        <div className={s.name}>{users.fullName}</div>
                        <div className={s.status}>{users.status}</div>
                        <div className={s.cityName}>{users.location.cityName}</div>
                        <div className={s.country}>{users.location.country}</div>
                    </div>
                </div>)}

            <div className={s.pages}>
                {pages.map(p => {
                return <span key={p} className={`${this.props.currentPage === p && s.selectedPage} ${s.pageSelector}`}
                             onClick={() => {
                                 this.onPageChanged(p)
                             }}>{p}</span>
            })}
            </div>
        </div>
    }
}

export default Users;