import React from "react";
import avatar from "../../assets/avatar-placeholder.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let selected = (p) => {
    if (props.currentPage === p) {
      return "px-1 text-lg cursor-pointer font-bold";
    } else {
      return "text-md px-0.5 cursor-pointer";
    }
  };

  return (
    <div>
      {props.users.map((users) => (
        <div key={users.id} className="grid grid-cols-app gap-4 m-7">
          <div className="mx-auto">
            <NavLink to={"/profile/" + users.id}>
              {users.photos.small ? (
                <img
                  className="rounded-xl shadow-myBoxShadow"
                  src={users.photos.small}
                  alt={users.name}
                />
              ) : (
                <img src={avatar} alt={users.name} width="100px" />
              )}
            </NavLink>
            <div>
              {users.followed ? (
                <button
                  className="btn mt-3 ml-4"
                  onClick={() => {
                    props.unfollow(users.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="btn mt-3 ml-6"
                  onClick={() => {
                    props.follow(users.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className="grid grid-rows-2 rounded-xl border border-myGray-lightIce items-center self-center">
            <div className="ml-2">{users.name}</div>
            <div className="ml-2">{users.status}</div>
          </div>
        </div>
      ))}

      <div className="m-3">
        {pages.map((p) => {
          if (p <= 10) {
            return (
              <span
                key={p}
                className={selected(p)}
                onClick={() => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          } else {
            return (
              <span
                key={p}
                className="hidden"
                onClick={() => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Users;
