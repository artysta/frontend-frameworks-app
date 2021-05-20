import { combineReducers } from 'redux';
import comments, { ICommentReducer } from './commentReducers';
import users, { IUserReducer } from './userReducers';

export default combineReducers({
    users,
    comments
})

export interface IState {
    users: IUserReducer
    comments: ICommentReducer
}