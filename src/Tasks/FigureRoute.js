import React from 'react';
import { useState } from 'react';
import './Styles.css';

import Figure from './FiguresComponents/Figure';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const FigureRoute = () => {
  const types = [1, 2];
  const colors = ['red', 'gray', 'blue', 'cyan', 'yellow', 'orange'];

  const [type, setType] = useState(types[0]);
  const [color, setColor] = useState(colors[0]);

  return (
    <Router>
      <div>
        <div>
          {types.map((item, index) => (
            <Link to={`/figure/${item}/${color}`} onClick={() => setType(item)}>
              <button key={index} className={item}>
                {item}
              </button>
            </Link>
          ))}
        </div>

        <div>
          {colors.map((item, index) => (
            <Link to={`/figure/${type}/${item}`} onClick={() => setColor(item)}>
              <button key={index} className={item}>
                {item}
              </button>
            </Link>
          ))}
        </div>

        <Switch>
          <Route path='/figure/:type/:color' children={<Figure />} />
        </Switch>
      </div>
    </Router>
  );
};

export default FigureRoute;
