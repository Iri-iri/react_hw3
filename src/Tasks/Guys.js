import React from 'react';
import './Styles.css';
import data from '../data.json';

console.log(data);

const Guys = () => {
  return (
    <div>
      {data.map((element) => {
        return (
          <div className="abs">
            <h3>{element.name.first}</h3>
            <p>{element.name.last}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Guys;
