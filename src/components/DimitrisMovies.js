import React from 'react'

const dimitrisMovies = ({movies, setMovies}) => {
    // console.log('hello')
    return (
        <div>
            {movies.map(item => (
                 
                <div> <img src={item.fields.poster.fields.file.url} alt="" width="20%"/> 
                <div className="trailers"> 
                <iframe title="" src={item.fields.trailers} width="560" height="315"></iframe>
                </div>
            </div>
            ))}
        </div>
    )
}

export default dimitrisMovies
