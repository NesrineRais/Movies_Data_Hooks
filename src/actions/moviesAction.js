import {
    LOAD_MOVIES_REQUEST,
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_FAILURE,
    REMOVE_MOVIES_SUCCESS,
    FILTER_MOVIES_SUCCESS
} from './actions-types';
import { movies$ } from '../movies';


export const loadAllMovies = () => {

    return async function (dispatch) {

        dispatch(fetchMoviesRequest())
        try {
            const movies = await movies$
            dispatch(fetchMoviesSuccess(movies))
            //dispatch(removeToBasket(movies))



        } catch (err) {
            dispatch(fetchMoviesFailure(err.message))
        }


    }

}

export const fetchMoviesRequest = () => {
    //console.log("fetchMoviesRequest")
    return function (dispatch) {
        //console.log("fetchMoviesRequest")
        dispatch({
            type: LOAD_MOVIES_REQUEST
        })
    }
}

export const fetchMoviesSuccess = movies => {
    //console.log("fetchMoviesSuccess")

    return {
        type: LOAD_MOVIES_SUCCESS,
        payload: movies

    }

}

export const fetchMoviesFailure = error => {
    //console.log("fetchMoviesFailure")

    return {
        type: LOAD_MOVIES_FAILURE,
        payload: error
    }
}

export const removeToBasket = (item) => {
    return async function (dispatch) {
        const movies = await movies$
        let index;

        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === item) {
                console.log(item)
                console.log(movies[i].id)
                index = i;
            }
        }

        movies.splice(index, 1);


        dispatch({
            type: REMOVE_MOVIES_SUCCESS,
            payload: movies
        })
    }
    //movies.splice(index, 1);

}

export const FilterMovie = (movies) => {
    return async function (dispatch) {
        dispatch({
            type: FILTER_MOVIES_SUCCESS,
            payload: movies
        })
    }
}
