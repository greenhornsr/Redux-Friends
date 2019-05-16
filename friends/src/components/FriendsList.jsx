import React from 'react';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions'

class FriendsList extends React.Component{
    componentDidMount() {
        this.props.getData();
        // console.log(this.props)
    }

    render(){
        return(
            <>
                <div>
                    <h1>My Friends</h1>
                    {this.props.fetchingFriends ? (
                    <div className="key spinner">
                        <Loader type="Puff" color="#204963" height="60" width="60" />
                        <p>Loading Data</p>
                    </div>
                    ): (this.props.friends.map(friend => {
                        return (
                        <section className="myfriend" key={friend.id} >
                            <h3 >{friend.id}</h3>
                            <h3>{friend.name}</h3>
                            <h3>{friend.age}</h3>
                            <h3>{friend.email}</h3>
                        </section>
                        )
                    }))
                }
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends
});

export default withRouter(connect(
    mapStateToProps,
    {getData}
)(FriendsList)
);