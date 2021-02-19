import React from 'react';
import s from './Messages.module.css';
import ContactsPageContainer from "./ContactsBlockContainer";
import MessagesPageContainer from "./MessagesBlockContainer";
import {Route} from "react-router-dom";

const MessagesPage = (props) => {
    return (
        <div className={s.dialogs}>
            <ContactsPageContainer/>
            <Route path='/messages/:dialogId' render={() => <MessagesPageContainer/>}/>
        </div>
    )
}

export default MessagesPage;