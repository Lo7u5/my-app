import React from "react";
import s from "../Contact.module.css";
import {NavLink} from "react-router-dom";

const ContactElements = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.contact}>
            <NavLink to={path} activeClassName={s.active}>
                <img src={props.profilePicture} alt="ava" width='30px' className={s.ava}/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default ContactElements;