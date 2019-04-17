const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [{
        id: 1,
        name: 'Justin',
        age: 26,
        email: 'justin@lambdaschool.com'
    },
    {
        id: 2,
        name: 'Shirley',
        age: 42,
        email: 'shirley@lambdaschool.com'
    },
    {
        id: 3,
        name: 'Ali',
        age: 32,
        email: 'ali@lambdaschool.com'
    }],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null,
}

export const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        default:
            return state;
    }
};