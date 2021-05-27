import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/todoTypes';
import { ISingleTodo } from '../entities/ISingleTodo';

export const getTodos = (): Promise<ISingleTodo[]> => ((dispatch: Dispatch) => {
    return fetch('http://jsonplaceholder.typicode.com/todos')
        .then(reponse => reponse.json())
        .then((todosList: ISingleTodo[]) => {
            dispatch({
                type: actionTypes.GET_TODOS,
                todosList
            })
        })
}) as any;