import React from 'react'
import {useParams} from 'react-router-dom';
import Post from './Post';

function SingleMovie({movies}) {

    const {id} = useParams();

    const movie = movies.find(el => el.fields.id === Number(id));
    console.log(movie)

    return (
        <div className="post-container">
            <div >
            <Post item={movie} />
        </div>

        </div>
    )
}

export default SingleMovie
