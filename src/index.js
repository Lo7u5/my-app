import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// берем данные из стейта и передаем их в app
import store from './redux/state';


export let rerenderAllShit = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addMessage={store.addMessage.bind(store)}
                draftMessageUpdate={store.draftMessageUpdate.bind(store)}
                addPost={store.addPost.bind(store)}
                draftPost={store.draftPostUpdate.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderAllShit()
store.subscribe(rerenderAllShit);