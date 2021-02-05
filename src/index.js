import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// берем данные из стейта и передаем их в app
import state, { subscribe, addMessage, draftMessageUpdate } from './redux/state';


export let rerenderAllShit = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addMessage={addMessage} draftMessage={draftMessageUpdate} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderAllShit()
subscribe(rerenderAllShit);