import React from 'react'
import {NavLink} from 'react-router-dom'
import cinema from './movie_pics_small_size/cinema.jpg'
const Landingpage = () => {
    return (
        // lp = landingpage
        <div className="lp-container"> 
            <NavLink to='./AllMovies'>
              <h1 className="lp-text">Our Favorite Movies</h1>
            </NavLink>
        </div>
    )
}

export default Landingpage
