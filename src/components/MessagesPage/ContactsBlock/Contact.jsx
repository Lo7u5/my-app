import React from "react";
import ContactElements from "./ContactElements/ContactElements";

const Contact = (props) => {
  let contactElements = props.contacts.map((contact) => (
    <ContactElements
      name={contact.name}
      id={contact.id}
      profilePicture={contact.profilePicture}
      key={contact.id}
    />
  ));

  return <div className="justify-self-center p-5">{contactElements}</div>;
};

export default Contact;
