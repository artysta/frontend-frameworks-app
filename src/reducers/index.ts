import { combineReducers } from 'redux';
import comments, { ICommentReducer } from './commentReducers';
import users, { IUserReducer } from './userReducers';
import posts, { IPostReducer } from './postReducers';
import albums, { IAlbumReducer } from './albumReducers';

export default combineReducers({
    users,
    comments,
    posts,
    albums
})

export interface IState {
    users: IUserReducer
    comments: ICommentReducer
    posts: IPostReducer
    albums: IAlbumReducer
}