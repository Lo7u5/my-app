import React from 'react';
import s from './Users.module.css';
import avatar from '../../assets/avatar-placeholder.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {props.users.map(users =>
            <div key={users.id} className={s.usersContainer}>
                <div className={s.photoAndButton}>
                    <NavLink to={'/profile/' + users.id}>
                        {users.photos.small ? <img className={s.photoUser} src={users.photos.small} alt={users.name}/> :
                            <img className={s.photoUser} src={avatar} alt={users.name} width='100px'/>}
                    </NavLink>
                    <div>
                        {users.followed ? <button onClick={() => {
                                props.unfollow(users.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(users.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div className={s.usersInfo}>
                    <div className={s.name}>{users.name}</div>
                    <div className={s.status}>{users.status}</div>
                    {/*<div className={s.cityName}>{users.location.cityName}</div>*/}
                    {/*<div className={s.country}>{users.location.country}</div>*/}
                </div>
            </div>)}

        <div className={s.pages}>
            {pages.map(p => {
                if (p <= 10) {
                return <span key={p} className={`${props.currentPage === p && s.selectedPage} ${s.pageSelector}`}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            } else {
                    return <span key={p} className={`${props.currentPage === p && s.selectedPage} ${s.pageSelector} ${s.hide}`}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                }
            })}
        </div>
    </div>
}

export default Users;