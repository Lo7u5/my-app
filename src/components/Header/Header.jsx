import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  function toggleMenu() {
    let nav = document.getElementById("nav");
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
      nav.classList.add("block");
    } else {
      nav.classList.remove("block");
      nav.classList.add("hidden");
    }
  }
  return (
    <header className="bg-myGray-warmGray bg-opacity-25 rounded-xl grid grid-flow-col sm:gap-4 sm:grid-cols-app lg:col-span-2">
      <img className="w-10 my-2" src="./../logo192.png" alt="logo" />
      <div className="hidden mr-4 sm:block lg:hidden sm:justify-self-end sm:self-center">
        <nav className="inline-flex space-x-2">
          <div className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/profile"
              activeClassName="font-bold"
            >
              Profile
            </NavLink>
          </div>
          <div className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/messages"
              activeClassName="font-bold"
            >
              Messages
            </NavLink>
          </div>
          <div className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/news"
              activeClassName="font-bold"
            >
              News
            </NavLink>
          </div>
          <div className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/music"
              activeClassName="font-bold"
            >
              Music
            </NavLink>
          </div>
          <div className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/settings"
              activeClassName="font-bold"
            >
              Settings
            </NavLink>
          </div>
          <div className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/users"
              activeClassName="font-bold"
            >
              Find Users
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="justify-self-end self-center mr-4 sm:hidden">
        <button
          className="text-myGray-darkIce focus:outline-none mr-3"
          onClick={toggleMenu}
        >
          Menu
        </button>
        <ul
          id="nav"
          className="hidden absolute bg-myGray-warmGray bg-opacity-75 right-2.5"
        >
          <li className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/profile"
              activeClassName="font-bold"
            >
              Profile
            </NavLink>
          </li>
          <li className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/messages"
              activeClassName="font-bold"
            >
              Messages
            </NavLink>
          </li>
          <li className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/news"
              activeClassName="font-bold"
            >
              News
            </NavLink>
          </li>
          <li className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/music"
              activeClassName="font-bold"
            >
              Music
            </NavLink>
          </li>
          <li className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/settings"
              activeClassName="font-bold"
            >
              Settings
            </NavLink>
          </li>
          <li className="pt-1.5">
            <NavLink
              className="text-myGray-darkIce"
              to="/users"
              activeClassName="font-bold"
            >
              Find Users
            </NavLink>
          </li>
        </ul>
        {props.auth.isAuth ? (
          props.login
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
      <div className="justify-self-end self-center hidden sm:block mr-2">
        {props.auth.isAuth ? (
          props.login
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
