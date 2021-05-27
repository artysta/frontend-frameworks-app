import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/photoTypes';
import { ISinglePhoto } from '../entities/ISinglePhoto';

export const getPhotos = (): Promise<ISinglePhoto[]> => ((dispatch: Dispatch) => {
    return fetch('http://jsonplaceholder.typicode.com/photos')
        .then(reponse => reponse.json())
        .then((photosList: ISinglePhoto[]) => {
            dispatch({
                type: actionTypes.GET_PHOTOS,
                photosList
            })
        })
}) as any;