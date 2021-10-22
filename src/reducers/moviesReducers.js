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
    error: ''
}

export default function MoviesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
            break;
        case LOAD_MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: ''
            }
            break;
        case REMOVE_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
            }
            break;
        case FILTER_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
            }
            break;
        case LOAD_MOVIES_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
            break;

    }

    return state;
}
