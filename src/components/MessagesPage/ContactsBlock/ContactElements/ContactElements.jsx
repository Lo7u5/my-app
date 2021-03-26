import React from "react";
import { NavLink } from "react-router-dom";

const ContactElements = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className="p-5">
      <NavLink
        className="text-myGray-darkIce no-underline"
        to={path}
        activeClassName="text-bold"
      >
        <img
          src={props.profilePicture}
          alt="ava"
          className="ml-2 rounded-lg w-10"
        />
        {props.name}
      </NavLink>
    </div>
  );
};

export default ContactElements;
