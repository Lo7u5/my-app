import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.dispatch.setUsers(
            [
                {
                    id: 1,
                    followed: true,
                    photoUrl: 'https://i.pravatar.cc/150?img=3',
                    fullName: 'Dima',
                    status: 'lalka',
                    location: {
                        cityName: 'Moscow',
                        country: 'Russia'
                    }
                },
                {
                    id: 2,
                    followed: false,
                    photoUrl: 'https://i.pravatar.cc/150?img=42',
                    fullName: 'Fatima',
                    status: 'lolka',
                    location: {
                        cityName: 'New York',
                        country: 'USA'
                    }
                },
                {
                    id: 3,
                    followed: false,
                    photoUrl: 'https://i.pravatar.cc/150?img=50',
                    fullName: 'Chert',
                    status: 'lulka',
                    location: {
                        cityName: 'Prague',
                        country: 'Czech'
                    }
                }
            ]
        )
    }

    return <div>
        {props.users.map(users =>
            <div key={users.id} className={s.usersContainer}>
            <div className={s.photoAndButton}>
                <img className={s.photoUser} src={users.photoUrl} alt={users.fullName}/>
                <div>
                    {users.followed ? <button onClick={() => {props.dispatch.unfollow(users.id)}}>Unfollow</button>
                    : <button onClick={() => {props.dispatch.follow(users.id)}}>Follow</button>}
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