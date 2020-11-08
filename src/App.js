import React from "react";
import './App.css';
import Italic from "./Tasks/Italic";
import Square from "./Tasks/Square";
import IsSignedln from "./Tasks/IsSignedln";
import Guys from "./Tasks/Guys";
import Number from "./Tasks/Number";
import Input from "./Tasks/Input";
import Tap from './Tasks/Tap';


function App() {
  return (
    <div className='App'>
      <Italic />

      <Square label='big' cssClass='big_square'></Square>
      <Square label='medium' cssClass='medium_square'></Square>
      <Square label='small' cssClass='small_square'></Square>

      <IsSignedln />
      <Guys />
      <Number />
      <Input />

      <div>
        <Tap
          label='button1'
          clickFunction={() => {
            console.log('Button 1');
          }}
        />
        <Tap
          label='button2'
          clickFunction={() => {
            alert('Button 2');
          }}
        />
        <Tap
          label='button3'
          clickFunction={(label) => {
            console.log(label);
          }}
        />
      </div>
    </div>
  );
}

export default App;