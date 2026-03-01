import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions'

class Friends extends React.Component {
    state = {

    }
    
    render() {
        return (
            <div>
                <h1>Friends List:</h1>
            </div>
        )
    }
}

const mapStateToProps = ({ fetchingFriends, friends }) => ({
    fetchingFriends,
    friends

});

export default connect(
    mapStateToProps,
    { getFriends }
    )(Friends);