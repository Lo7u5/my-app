import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import userReducer from "./Users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  usersPage: userReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;

window.store = store;
