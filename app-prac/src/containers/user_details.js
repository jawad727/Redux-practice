import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetails extends Component {


    render(){
        if (this.props.activeUser) {
        return (<p>{this.props.activeUser.first}</p>)
    } else {return <p>Select a user</p>} }
}

function mapStateToProps(state) { 
        return { activeUser: state.activeUser }
}

// function mapDispatchToProps(dispatch) { 
//     return bindActionCreators(
//         {selectUser: selectUser}, dispatch
//         )
// }

export default connect(mapStateToProps)(UserDetails)