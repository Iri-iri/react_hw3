import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import IsSignedln from './IsSignedln';
import Square from './Square';
import Italic from './Italic';
import Guys from './Guys';
import Number from './Number';
import Input from './Input';
import Loader from './Loader';
import './Styles.css';

class Navigator extends Component {
  state = {
    currentPage: 'sign',
  };

  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to='/sign'>IsSignedln</Link>
          <Link to='/square'>Square</Link>
          <Link to='/italic'>Italic</Link>
          <Link to='/guys'>Guys</Link>
          <Link to='/number'>Number</Link>
          <Link to='/input'>Input</Link>
          <Link to='/loader'>Loader</Link>
        </nav>

        <Switch>
          <Route path='/sign'>
            <IsSignedln />
          </Route>

          <Route path='/square'>
            <Square label='big' cssClass='big_square'></Square>
            <Square label='medium' cssClass='medium_square'></Square>
            <Square label='small' cssClass='small_square'></Square>
          </Route>

          <Route path='/italic'>
            <Italic />
          </Route>

          <Route path='/guys'>
            <Guys />
          </Route>

          <Route path='/number'>
            <Number />
          </Route>

          <Route path='/input'>
            <Input />
          </Route>

          <Route path='/loader'>
            <Loader />
          </Route>

          <Route path='/'>
            <IsSignedln />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigator;
