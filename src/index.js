import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";

export let rerenderAllShit = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderAllShit(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderAllShit(state)
});