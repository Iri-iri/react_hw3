import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles.css';

const Figure = () => {
  const { type } = useParams();
  const { color } = useParams();

  const types = { 1: 'square', 2: 'circle' };

  const colors = {
    red: 'red',
    gray: 'gray',
    blue: 'blue',
    cyan: 'cyan',
    yellow: 'yellow',
    orange: 'orange',
  };


  return (
    <div
      className={`${types[type]}`}
      style={{ backgroundColor: `${colors[color]}` }}
    ></div>
  );
};

export default Figure;
