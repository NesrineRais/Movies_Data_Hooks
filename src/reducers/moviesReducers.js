import {
    LOAD_MOVIES_REQUEST,
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_FAILURE,
    REMOVE_MOVIES_SUCCESS,
    FILTER_MOVIES_SUCCESS
} from '../actions/actions-types'

const initialState = {
    loading: false,
    movies: [],
    moviesFiltered: [],
    error: ''
}

export default function MoviesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOAD_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
                moviesFiltered: state.moviesFiltered.length === 0 ? action.payload : state.moviesFiltered
            }
        case REMOVE_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
            }
        case LOAD_MOVIES_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case FILTER_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                moviesFiltered: action.payload,
            }
        default:
            return state;
    }
}
