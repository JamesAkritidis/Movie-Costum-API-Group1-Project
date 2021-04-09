import React from 'react'
import {useParams} from 'react-router-dom';
import Post from './Post';

function SingleMovie({movies}) {


    const {id} = useParams();
    console.log({id});

    const getSingleMovie = movies.filter (el => el.fields.id === id);

    console.log(getSingleMovie)

    return (
        <div className="post-container">
            <div>
                hello
                {getSingleMovie.map((item, index) => <Post item={item} key={index} /> )}
            </div>
            
        </div>
    )
}

export default SingleMovie
