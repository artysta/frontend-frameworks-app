import { combineReducers } from 'redux';
import comments, { ICommentReducer } from './commentReducers';
import users, { IUserReducer } from './userReducers';
import posts, { IPostReducer } from './postReducers';
import albums, { IAlbumReducer } from './albumReducers';
import photos, { IPhotoReducer } from './photoReducers';
import todos, { ITodoReducer } from './todoReducers';

export default combineReducers({
    users,
    comments,
    posts,
    albums,
    photos,
    todos
})

export interface IState {
    users: IUserReducer
    comments: ICommentReducer
    posts: IPostReducer
    albums: IAlbumReducer
    photos: IPhotoReducer
    todos: ITodoReducer
}