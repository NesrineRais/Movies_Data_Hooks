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
        console.log(index)
        movies.splice(index, 1);


        dispatch({
            type: REMOVE_MOVIES_SUCCESS,
            payload: movies
        })
    }
    // movies.splice(index, 1);
}

export const filterMovie = (item, movis) => {

    return async function (dispatch) {

        const movies = await movies$
        let tablfilter = [];
        let tablfilterData = []

        for (let i of movies) {
            console.log("item2", i)

            for (let x of item) {
                console.log("itemx", x)
                if (i.category === x.category) {

                    tablfilter.push(movies[i])
                    console.log(movies[i]);


                }
            }
            // eslint-disable-next-line no-loop-func
        }
        // console.log("tablfilter", tablfilter);

        //console.log("index", tablfilter)


        tablfilterData = [...tablfilter, ...tablfilterData];
        // console.log("tablfilterData", tablfilterData)

        dispatch({
            type: FILTER_MOVIES_SUCCESS,
            payload: [...new Set(tablfilterData)]
        })
    }
}
