import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class UserList extends Component {


    render() {
        return(
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserList)