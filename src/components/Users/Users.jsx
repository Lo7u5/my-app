import React from 'react';
import s from './Users.module.css';

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
                    <img className={s.photoUser} src={users.photoUrl} alt={users.fullName}/>
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
                    <div className={s.name}>{users.fullName}</div>
                    <div className={s.status}>{users.status}</div>
                    <div className={s.cityName}>{users.location.cityName}</div>
                    <div className={s.country}>{users.location.country}</div>
                </div>
            </div>)}

        <div className={s.pages}>
            {pages.map(p => {
                return <span key={p} className={`${props.currentPage === p && s.selectedPage} ${s.pageSelector}`}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
    </div>
}

export default Users;