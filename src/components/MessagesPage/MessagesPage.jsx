import React from 'react';
import ContactsPageContainer from "./ContactsBlockContainer";
import MessagesPageContainer from "./MessagesBlockContainer";
import {Route} from "react-router-dom";

const MessagesPage = (props) => {
    return (
        <div className='grid grid-cols-4 sm:grid-cols-app'>
            <ContactsPageContainer/>
            <Route path='/messages/:dialogId' render={(props) => <MessagesPageContainer {...props}/>}/>
        </div>
    )
}

export default MessagesPage;