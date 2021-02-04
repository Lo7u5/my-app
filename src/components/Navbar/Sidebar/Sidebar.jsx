import React from 'react';
import Friends from './Friends/Friends';
import s from './Sidebar.module.css';

const Sidebar = (props) =>{
    return (
        <div>
            <Friends contacts={props.contacts}/>
        </div>
    )
}

export default Sidebar;