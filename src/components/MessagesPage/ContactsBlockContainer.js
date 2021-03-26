import { connect } from "react-redux";
import Contact from "./ContactsBlock/Contact";

const mapStateToProps = (state) => {
  return {
    contacts: state.messagesPage.contacts,
  };
};

const ContactsPageContainer = connect(mapStateToProps)(Contact);

export default ContactsPageContainer;
