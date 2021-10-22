import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { filterMovie, loadAllMovies } from '../actions/moviesAction';
import { Checkbox, FormGroup } from '@mui/material';

const MovieCategory = (props) => {
    const items = props.item;

    // Non duplicated categories
    const nonDuplicatedCategories = Array.from(new Set(props.item.movies.map(j => j.category)));

    const [movies, setMovies] = useState([]);

    const handleChange = (e) => {
        // Copy from global state to a new array
        let moviesByCategories = [...movies];
        let moviesFiltered;

        // If checkbox is checked
        if(e.target.checked) {
            //console.log("CHECKED");
            //console.log(e.target.value);

            // Filter movies by category
            moviesFiltered = props.item.movies.filter(movie => movie.category.toLowerCase() === e.target.value.toLowerCase());

            moviesByCategories.push(...moviesFiltered)

            // Set state & Accept only non duplicated movies
            setMovies([...new Set(moviesByCategories)]);

            props.filterMovie(moviesByCategories);

        } else {
            //console.log("UN-CHECKED");
            //console.log(e.target.value);

            // Filter movies by category are not the same
            moviesFiltered = moviesByCategories.filter(movie => movie.category.toLowerCase() !== e.target.value.toLowerCase());

            setMovies([...moviesFiltered]);

            props.filterMovie(moviesFiltered);
        }
    }

    useEffect(() => {
        // If there no left movies filtered && load all movies
        items.moviesFiltered.length === 0 && props.loadAllMovies();
        
        // eslint-disable-next-line
    }, [props])

    return (

        <div>
            <FormGroup>
                <div>
                    {nonDuplicatedCategories.length && nonDuplicatedCategories.map((category, idxKey) => {
                        return (
                            <div key={idxKey}>
                                <Checkbox
                                    onChange={handleChange}
                                    value={category}
                                /> {category}
                            </div>
                        )
                    })}
                </div>
            </FormGroup>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        item: store.movies
    }
}
const mapDispatchToProps = {
    filterMovie,
    loadAllMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCategory);
