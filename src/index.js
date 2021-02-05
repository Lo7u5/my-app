import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// берем данные из стейта и передаем их в app
import state, { subscribe } from './redux/state';


export let rerenderAllShit = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderAllShit()
state.subscribe(rerenderAllShit);