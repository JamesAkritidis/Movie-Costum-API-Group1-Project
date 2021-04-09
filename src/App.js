import React, { useState, useEffect} from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import client from './client'
import SingleMovie from "./components/SingleMovie"
import NavBar from "./components/NavBar"
import Landingpage from "./components/Landingpage"
import AllMovies from "./components/AllMovies"
import SingleCategory from "./components/SingleCategory"



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
        <Router>
          <NavBar />
          <div className="main-wrapper">
            <Switch>
              <Route exact path="/" component={Landingpage} movies={movies}/>
              <Route exact path="/AllMovies" movies={movies}>
                <allMovie movies={movies}/>
              </Route>
              <Route path="/SingleMovie/:id"> 
                <SingleMovie movies={movies} />
              </Route>
              <Route path="/SingleCategory/:person">
                <SingleCategory movies={movies}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
  );
}
export default App;
