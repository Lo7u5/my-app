import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesPage from "./components/MessagesPage/MessagesPage";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className='p-2 mx-auto h-screen grid gap-4 lg:grid-cols-app grid-rows-app lg:w-app'>
            <Header/>
            <Navbar/>
            <div className='bg-myGray-warmGray bg-opacity-25 rounded-xl lg:max-w-app'>
                <Route path='/messages' render={() => <MessagesPage/>}/>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;