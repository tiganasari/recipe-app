import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {


  const APP_ID = '0346e7d0';
  const APP_KEY = 'b087565973e9e485c22c11879174743c';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    console.log('effect has been run')
  })

  const[counter, setCounter] = useState(0);

  return (
    <div className="App">
     <form className="search-form">
       <input className="search-bar" type="text"></input>
       <button className="search-button" type="submit">  {counter}
       </button>
     </form>

     <h1 onClick={() => setCounter(counter+1)} >{counter}</h1>
    </div>
  );
};

export default App;
