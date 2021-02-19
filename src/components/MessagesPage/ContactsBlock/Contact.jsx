import React from "react";
import s from './Contact.module.css';
import ContactElements from "./ContactElements/ContactElements";

const Contact = (props) => {

    let contactElements = props.contacts.map(contact => <ContactElements name={contact.name} id={contact.id}
                                                                       profilePicture={contact.profilePicture}
                                                                       key={contact.id}/>)

    return (
        <div className={s.contacts}>
            {contactElements}
        </div>
    )
}

export default Contact;