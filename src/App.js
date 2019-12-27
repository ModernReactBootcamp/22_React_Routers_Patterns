import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Food from './Food';

function App() {
  return (
    <div className='App'>
      <Route exaxt path='/food/:name' component={Food} />
      {/* <Food name='Kale' />
      <Food name='Chicken' />
      <Food name='Banana' /> */}
    </div>
  );
}

export default App;
