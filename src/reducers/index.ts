import { combineReducers } from 'redux';

import users, { IUserReducer } from './userReducers';

export default combineReducers({
    users
})

export interface IState {
    users: IUserReducer
}