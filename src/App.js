import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Food from './Food';
import Meal from './Meal';
import FoodSearch from './FoodSearch';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/food/:name'
            render={routeProps => <Food {...routeProps} />}
          />
          <Route
            exact
            path='/food/:foodName/drink/:drinkName'
            component={Meal}
          />
          <Route exact path='/' component={FoodSearch} />} />
          <Route render={() => <h1>ERROR NOT FOUND</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
