import React from "react";
import profileAva from "../../../assets/avatar-placeholder.png";

const ProfileInfo = (props) => {
  function toggleMenu() {
    let contacts = document.getElementById("contacts");
    if (contacts.classList.contains("hidden")) {
      contacts.classList.remove("hidden");
      contacts.classList.add("block");
    } else {
      contacts.classList.remove("block");
      contacts.classList.add("hidden");
    }
  }

  return (
    <div>
      <div>
        <img
          className="rounded-lg w-max object-cover object-center"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sciencealert.com%2Fimages%2Farticles%2Fprocessed%2F1shutterstock_336744542_1024.jpg&f=1&nofb=1"
          alt="backImg"
        />
      </div>
      <div className="grid mt-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-prGr">
        {props.profile.photos.large ? (
          <img
            className="rounded-lg shadow-myBoxShadow h-28 sm:h-44 place-self-center"
            src={props.profile.photos.large}
            alt="ava"
          />
        ) : (
          <img
            className="rounded-lg shadow-myBoxShadow h-28 sm:h-44 place-self-center"
            src={profileAva}
            alt="ava"
          />
        )}
        <div className="text-myGray-darkIce sm:col-span-3 lg:col-auto grid">
          <div>Name: {props.profile.fullName}</div>
          <div className="hidden sm:block">{props.profile.aboutMe}</div>
          <div className="sm:hidden">
            <button
              className="text-myGray-darkIce focus:outline-none"
              onClick={toggleMenu}
            >
              Contacts
            </button>
            <ul
              id="contacts"
              className="hidden absolute bg-myGray-warmGray bg-opacity-75"
            >
              {Object.entries(props.profile.contacts).map((entry, id) => {
                return (
                  <li className="pt-1.5" key={id}>
                    <a href={entry[1]}>{entry[0]}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
