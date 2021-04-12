import React from 'react'
import {NavLink} from 'react-router-dom'
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
