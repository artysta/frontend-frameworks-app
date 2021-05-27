import { combineReducers } from 'redux';
import comments, { ICommentReducer } from './commentReducers';
import users, { IUserReducer } from './userReducers';
import posts, { IPostReducer } from './postReducers';
import albums, { IAlbumReducer } from './albumReducers';
import photos, { IPhotoReducer } from './photoReducers';

export default combineReducers({
    users,
    comments,
    posts,
    albums,
    photos
})

export interface IState {
    users: IUserReducer
    comments: ICommentReducer
    posts: IPostReducer
    albums: IAlbumReducer
    phoyos: IPhotoReducer
}