import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

import {selectUser} from '../actions/index'

class UserList extends Component {

    createListItems(){
        return this.props.users.map(item => {
            return(
                <li onClick={() => this.props.selectUser(item)} key={item.id}>{`${item.first}, ${item.last}`}</li>
            )
        })
    }

    render() {
        return(
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state) { //allows us to use global state from props
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) { //allows us to use actions from props
    return bindActionCreators(
        {selectUser: selectUser}, dispatch
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)