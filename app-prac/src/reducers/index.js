import {combineReducers} from 'redux';
import UserReducer from './reducer_users'

// This is a JSON object containing all the reducers in the folder
const allReducers = combineReducers({
    users: UserReducer
})

export default allReducers