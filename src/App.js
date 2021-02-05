import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
// принимаем данные и передаем в компоненты нужные части массива, а не все подряд
const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar messagesState={props.state.messagesPage} />
                <div className='app-wrapper-content'>
                    <Route path='/messages' render={() => <Messages messagesState={props.state.messagesPage} addMessage={props.addMessage} draftMessage={props.draftMessage} />} />
                    <Route path='/profile' render={() => <Profile postData={props.state.profilePage} />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;