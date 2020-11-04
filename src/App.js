import React from "react";
import './App.css';
import data from './data.json'
import Italic from "./Tasks/Italic";
import Square from "./Tasks/Square";
import IsSignedln from "./Tasks/IsSignedln"


console.log (data)

function App() {
  return (
    <div className="App">
      <Italic />
      
        <Square label="big" cssClass="big_square"></Square>
        <Square label="medium" cssClass="medium_square"></Square>
        <Square label="small" cssClass="small_square"></Square>
    
      <IsSignedln />
    </div>
  );
}

export default App;