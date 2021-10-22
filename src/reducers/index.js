import { combineReducers } from "redux";
import MoviesReducer from "./moviesReducers";

const rootReducer = combineReducers({
    movies: MoviesReducer
})

export default rootReducer;