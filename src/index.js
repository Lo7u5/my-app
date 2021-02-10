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
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderAllShit()
store.subscribe(rerenderAllShit);