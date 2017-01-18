import * as types from './actionTypes';
import authorApi from '../api/mockAuthorsApi';

export function loadAuthorsSuccess(authors) {
    // return { type : types.CREATE_COURSE , course : course } ES6
    // debugger;   
    return { type : types.LOAD_AUTHORS_SUCCESS , authors};
}

export function loadAuthors(){
    return function(dispatch){
        return authorApi.getAllAuthors()
            .then(authors => {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch(error => {
                throw(error);
            });
    };
}