import {combineReducers} from 'redux';
import UserReducer from './reducer_users'
import ActiveUserReducer from './reducer_active_user'

// This is a JSON object containing all the reducers in the folder
const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
})

export default allReducers