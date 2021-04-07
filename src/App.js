import React, { useState, useEffect} from 'react';


function App() {
  const [movies, setMovies] = useState({});
  const {REACT_APP_SPACE_ID, REACT_APP_ACCESS_TOKEN} = process.env;
  const query =  `
  {
   moviesCollection {
      items {
        id,
        title,
        imdbRating,
        genre,
        poster {
          url
        },
        trailer {
          url
        },
        director,
        cast
      }
    }
  }
  `;

  useEffect(() => {
    window
    .fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query })
    })
    .then((response) => response.json())
    .then((results, errors) =>{ 
    if (errors) {
          console.log(errors);
    }
    setMovies(results.data.moviesCollection.items)
    console.log(movies);
  })

  }, [])

  if (!movies) {
    return "Loading...";
  }

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
