import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { removeToBasket } from '../actions/moviesAction'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faTrash } from "@fortawesome/free-solid-svg-icons";

const Movie = movie => {
    const [isLiked, updateLike] = useState(false);
    const [disable, setDisable] = useState(false);
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const { title, category } = movie;

    // const [list, setList] = useState([this.item.movies]);


    useEffect(() => {
    }, [])
    const handleLike = () => {
        if (!isLiked) {
            updateLike(true)
            setCount(count + 1)
            setCount1(count)


        } else {

            updateLike(false)
            setCount(count - 1)
            setCount1(count1 + 1)

        }
    }

    return (
        <div>
            <Card.Body >
                <Button onClick={() => movie.removeToBasket(movie.movie.id)}>
                    <FontAwesomeIcon icon={faTrash} style={{ paddingLeft: 5 }} />
                </Button>
                <Card.Title>{movie.movie.title}</Card.Title>
                <Card.Text>
                    {movie.movie.category}
                </Card.Text>

                <Button
                    onClick={handleLike}
                    disabled={isLiked}
                >
                    {movie.movie.likes + count}
                    <FontAwesomeIcon icon={faThumbsUp} style={{ paddingRight: 5 }} />

                </Button>
                <Button onClick={handleLike} disabled={!isLiked}>
                    {movie.movie.dislikes + count1}
                    <FontAwesomeIcon icon={faThumbsDown} style={{ paddingLeft: 5 }} />
                </Button>

            </Card.Body>
        </div>
    )
}
const mapStateToProps = (store) => {
    return {
        item: store.movies
    }


}
const mapDispatchToProps = {
    removeToBasket,

}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);