import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../actions'

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null,
}

export const friendReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                error: '',
                fetchingFriends: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                friends: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
            }
        default:
            return state;
        }
    }