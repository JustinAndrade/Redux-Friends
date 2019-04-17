import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_START })
    const request = axios.get('http://localhost:5000/friends')

    request.then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
    request.catch(err => dispatch({ type: FETCH_ERROR, payload: err }));
}
