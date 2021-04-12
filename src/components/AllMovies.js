import React from 'react'
import {NavLink} from 'react-router-dom'

function AllMovies({movies}) {
    return (
        <div className="grid-movies-container">
            <h2 className="movies-all">All our favorite movies</h2>
            <div className="movie-grid">
                 {movies.map((item, index) =>
                (<NavLink to={`/SingleMovie/${item.fields.id}`}>
                <img key={index}  src={item.fields.poster.fields.file.url} alt="Movies" width='25%'
                 className="poster-grid"/></NavLink>))} 
            </div>
            
        </div>
    )
}

export default AllMovies
