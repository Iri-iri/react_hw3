import React from "react";
import './App.css';
import Italic from "./Tasks/Italic";
import Square from "./Tasks/Square";


function App() {
  return (
    <div className="App">
      <Italic />
      
        <Square label="big" cssClass="big_square"></Square>
        <Square label="medium" cssClass="medium_square"></Square>
        <Square label="small" cssClass="small_square"></Square>
    </div>
  );
}

export default App;