import React from 'react'

import {NavLink} from 'react-router-dom';
import '../Main.css'

function AllMovies({movies}) {
    return ( 
        <div className='categories'>
            <h1 className='categories-favorite'>Our favorite Movies</h1>
            <div className='singlecategory-link'>
                <NavLink to="/SingleCategory/Ahmad">
                    <div className="name-container">
                        <h1 className="text">Ahmad</h1>
                    </div>  
                </NavLink>
                <NavLink to="/SingleCategory/Jan">
                    <div className="name-container">
                        <h1 className="text">Jan</h1>
                    </div>  
                </NavLink>
                <NavLink to="/SingleCategory/Dimitris">
                    <div className="name-container">
                        <h1 className="text">Dimitris</h1>
                    </div>  
                </NavLink>  
            </div>
        <div className="grid-movies-container">
            <h2 className="movies-all">All Movies</h2>
            <div className="movie-grid">
                {movies.map((item, index) =>
                (<NavLink to={`/SingleMovie/${item.fields.id}`}>
                <img key={index}  src={item.fields.poster.fields.file.url} alt="Movies"
                 className="poster-grid"/></NavLink>))}
            </div>
        </div>
        </div>
    )
}

export default AllMovies
