import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/albumTypes';
import { ISingleAlbum } from '../entities/ISingleAlbum';

export const getAlbums = (): Promise<ISingleAlbum[]> => ((dispatch: Dispatch) => {
    return fetch('http://jsonplaceholder.typicode.com/albums')
        .then(reponse => reponse.json())
        .then((albumsList: ISingleAlbum[]) => {
            dispatch({
                type: actionTypes.GET_ALBUMS,
                albumsList
            })
        })
}) as any;