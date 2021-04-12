import React from 'react'
import '../Post.css'

function Post({item}) {
    return (


        <div className="post-container">
            <div className="post">
                <div className="trailer-container">
                    <iframe title="The Big Lebowski" src={item.fields.trailers} width="560" height="315"></iframe>
                </div>
                <div className="movie-details">
                    <div className="title-container">
                        <div className="movieTitle">{item.field.title}</div>
                    </div>
                    <div>Genre: {item.fields.genre}</div>
                    <div>Rating: {item.fields.imdbRating}</div>
                    <div>Director: {item.fields.director}</div>
                    <div>Actors: {item.fields.cast}</div>
                </div>
            </div>
            
        </div>
    )
}

export default Post
