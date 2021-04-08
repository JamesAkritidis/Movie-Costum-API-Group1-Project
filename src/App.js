import React, { useState, useEffect} from 'react';
import DimitrisMovies from './components/DimitrisMovies';
import client from './client'



  function App() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
      client
        .getEntries({content_type:"movies"})
        .then ((json) => {
          setMovies(json.items)
        })
        .catch (() => console.log ("Well at least we tried"))
  
    }, [])
    // console.log(movies)
  return (
    <div className="App">
      <h1>Hello</h1>
      <DimitrisMovies movies={movies} setMovies={setMovies} />
    </div>
  );
}
export default App;
