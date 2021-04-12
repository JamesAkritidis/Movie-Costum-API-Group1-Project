import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className= "navbar">
            {/* navbar logo and names for the links */}
            <div className="inner-container">
            <div className='logo'><h1>Movies to watch</h1></div>

            
            <h3><NavLink className="navigation-link" to='/'>Home</NavLink></h3>
            <h3><NavLink className="navigation-link" to='/SingleMovie'>All Movies</NavLink></h3>
            <h3><NavLink className="navigation-link" to='/singlecategory/Ahmad'>Ahmad</NavLink></h3>
            <h3><NavLink className="navigation-link" to='/SingleCategory/Jan'>Jan</NavLink></h3>
            <h3><NavLink className="navigation-link" to='/SingleCategory/Dimitris'>Dimitris</NavLink></h3>
            </div>
        </div>
    )
}

export default NavBar
