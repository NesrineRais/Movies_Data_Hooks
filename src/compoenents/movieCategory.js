import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Checkbox, FormGroup } from '@mui/material';

const MovieCategory = (props) => {
    const [checked, setChecked] = useState([]);

    const handleChange = (value) => {
        const currentIndex = checked.indexOf(value)
        const newCheck = [...checked]
        if (currentIndex === -1) {
            newCheck.push(value)
            console.log("newCheck", newCheck)
        } else {
            newCheck.splice(currentIndex, 1)
        }

        setChecked(newCheck)
        props.handleFilters(newCheck)
    }

    // remove duplicate data
    function removeDuplicates(data, key) {

        return [
            ...new Map(data.map(item => [key(item), item])).values()
        ]

    };

    return (

        < div >
            <FormGroup>
                <div>
                    {props.item.movies != null && removeDuplicates(props.item.movies, item => item.category).map((movie, key) => {
                        return (
                            <div key={key}>
                                <Checkbox
                                    checked={checked.indexOf(movie.id) === -1 ? false : true}
                                    onChange={() => handleChange(movie.id)}
                                    key={key}
                                    value={movie.category}
                                /> {movie.category}

                            </div>
                        )
                    })}
                </div>

            </FormGroup>
        </div >
    )
}

const mapStateToProps = (store) => {
    return {
        item: store.movies
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCategory);