import React from 'react'
import {useParams} from 'react-router-dom';
import Post from './Post';
import cinema from './movie_pics_small_size/cinema.jpg'

function SingleMovie({movies}) {

    const {id} = useParams();

    const movie = movies.find(el => el.fields.id === Number(id));
    console.log(movie)

    return (
        <div className="img2">
        <div className="post-container">
            
            <div >
            {/* <div className="img">
                <img src={cinema} width="60%"></img>
            </div> */}
            <Post item={movie} />
        </div>


        </div>
        </div>
    )
}

export default SingleMovie
