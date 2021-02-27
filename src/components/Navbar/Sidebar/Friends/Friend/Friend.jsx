import React from 'react';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div>
            <NavLink to={path}><img src={props.profilePicture} alt='ava'  width='50px' className='rounded-full'/>
            <span className='text-myGray-darkIce'>{props.name}</span></NavLink>
        </div>

    )
}

export default Friend;