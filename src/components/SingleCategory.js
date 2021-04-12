import React from 'react'
import {useParams} from 'react-router-dom'
import Post from './Post';

function SingleCategory({movies}) {

    const {person} = useParams ();
    // console.log(person)

    const getSingleMovie = movies.filter (el => el.fields.category.fields.name === person);
    // console.log(getSingleMovie)
    // console.log(movies)
    // console.log(person)

    return (
        <div className='post-container'>
            <div>
                {getSingleMovie.map((item, index) => <Post item={item} key={index} /> )}
            </div>
            
        </div>
    )
}

export default SingleCategory
