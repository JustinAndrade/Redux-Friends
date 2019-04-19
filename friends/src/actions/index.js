import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const UPDATING_FRIENDS = 'UPDATING_FRIENDS';
export const FRIENDS_UPDATED = 'FRIENDS_UPDATED';
export const DELETING_FRIENDS = 'DELETING_FRIENDS';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const FRIEND = 'FRIEND';
export const ERROR = 'ERROR';

const URL = 'http:localhost:5000/api/friends';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START});

    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS});
        })
        .catch(err => {
            console.log('login error ', err)
            if (err.response && err.response.status === 403) {
                localStorage.removeItem('token');
            }
            dispatch({ type: LOGIN_FAILURE });
        });
};

export const getFriends = () => {
    const friends = axios.get(`${URL}/get`);
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS })
        friends
        .then(response => {
            dispatch({ type: FRIENDS_FETCHED, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        })
    }

}