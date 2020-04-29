import React from 'react';
import Nav from './Nav';
import StatesList from './components/StatesList';
import StateLaw from './components/StateLaw';
import {
  Route, 
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Router>
    <div className="App">
      <Nav />
        <Route exact path='/' component={StatesList} />
        <Route path ='/states/:statesId?' component={StateLaw} />
    </div>
      </Router>
  );
}


export default App;
