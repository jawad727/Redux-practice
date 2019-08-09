import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

import {selectUser} from '../actions/index'

class UserList extends Component {


    render() {
        return(
            <ul>
                {this.props.users.map(item => { return ( 
                <li 
                onClick={() => this.props.selectUser(item)} 
                key={item.id} >
                {`${item.first}, ${item.last}`}
                </li>   )
        })}
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