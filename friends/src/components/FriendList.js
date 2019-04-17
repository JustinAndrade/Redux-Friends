import React from 'react';
import { connect } from 'react-redux';

import { friendReducer } from '../reducers/friendReducer';
import { getFriends } from '../actions';

import Friend from './Friend';

class FriendList extends React.Component {
    constructor() {
        super()
    }
    
    componentDidMount() {
        this.props.getFriends();
    }
    
    render() {
        console.log(this.props)
        return (
            <div className='friend-list-wrapper'>
                <h1>Friend List:</h1>
                {this.props.friends.map(friend =>
                    <Friend friend={friend} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    friends: state.friendReducer.friends,
    fetchingFriends: state.friendReducer.fetchingFriends
});

export default connect(
    mapStateToProps,
    { getFriends }
)(FriendList);