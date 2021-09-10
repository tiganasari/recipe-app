import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {


  const APP_ID = '0346e7d0';
  const APP_KEY = 'b087565973e9e485c22c11879174743c';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);


  }

  return (
    <div className="App">
     <form className="search-form">
       <input className="search-bar" type="text"></input>
       <button className="search-button" type="submit">  Search
       </button>
     </form>

    </div>
  );
};

export default App;
