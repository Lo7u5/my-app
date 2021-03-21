const SET_AUTH_DATA = 'SET-AUTH-DATA';
const SET_MY_PROFILE = 'SET-MY-PROFILE';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    myProfile: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_MY_PROFILE:
            return {
                ...state,
                myProfile: action.myProfile
            };
        default:
            return state;
    }
}

export const setAuthDataAC = (id, email, login) => ({ type: SET_AUTH_DATA, data: { id, email, login } });
export const setMyProfileAC = (myProfile) => ({type: SET_MY_PROFILE, myProfile})

export default authReducer;