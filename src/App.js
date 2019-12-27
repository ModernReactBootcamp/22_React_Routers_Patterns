import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Food from './Food';
import Meal from './Meal';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route
          exact
          path='/food/:name'
          render={routeProps => <Food {...routeProps} />}
        />

        <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
      </div>
    );
  }
}

export default App;
