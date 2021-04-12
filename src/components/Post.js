import React from 'react'
import '../Post.css'

function Post({item}) {
    return (
        <div className="post-container">
            {
            item &&
            (<div className="post">
                <div className="trailer-container">
                    <iframe title="The Big Lebowski" src={item.fields.trailers} width="560" height="315"></iframe>
                </div>
                <div className="movie-details">
                    <div className="title-container">
                        <div className="movieTitle">{item.fields.title}</div>
                    </div>

                    <div className="list">Genre: {item.fields.genre}</div>
                    <div className="list">Rating: {item.fields.imdbRating}</div>
                    <div className="list">Director: {item.fields.director}</div>
                    <div className="list">Actors: {item.fields.cast}</div>
                </div>
            </div>)}
        </div>
    )
}

export default Post
