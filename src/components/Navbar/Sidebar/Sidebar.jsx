import React from 'react';
import Friends from './Friends/Friends';
import s from './Sidebar.module.css';

const Sidebar = (props) =>{
    return (
        <div>
            <Friends state={props.state}/>
        </div>
    )
}

export default Sidebar;