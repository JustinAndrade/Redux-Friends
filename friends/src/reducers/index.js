import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  FRIENDS_SAVED,
  SAVING_FRIENDS,
  UPDATING_FRIENDS,
  FRIENDS_UPDATED,
  DELETING_FRIENDS,
  FRIENDS_DELETED,
  FRIEND,
  ERROR
} from '../actions'

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        error: "",
        isLoggingIn: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: false
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        error: "failed login",
        loggingIn: false
      };
    }
    case FETCHING_FRIENDS: {
      return {
        ...state,
        fetchingFriends: true
      }
    }
    case FRIENDS_FETCHED: {
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload
      }
    }
    default:
      return state;
  }
};

export default reducer;