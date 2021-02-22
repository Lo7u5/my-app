import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("http://localhost:3004/users/")
                .then(response => {
                    debugger
                    props.dispatch.setUsers(response.data)
                })
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {props.users.map(users =>
            <div key={users.id} className={s.usersContainer}>
                <div className={s.photoAndButton}>
                    <img className={s.photoUser} src={users.photoUrl} alt={users.fullName}/>
                    <div>
                        {users.followed ? <button onClick={() => {
                                props.dispatch.unfollow(users.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.dispatch.follow(users.id)
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
    </div>

}

export default Users;