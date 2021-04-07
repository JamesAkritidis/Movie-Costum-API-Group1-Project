import React, {useState, useEffect} from 'react';
import './App.css';
import { client } from './components/client';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then ((response) => {
        console.log(response)
      return  setMovies(json.items)
      })
      .catch (() => console.log ("testone"))

  }, [])


  return (
    <div className="App">
      <h1>Hello guys</h1>
    </div>
  );
}

export default App;
