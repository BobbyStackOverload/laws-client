import React from 'react';
import LawsList from './components/LawsList';
import StateLaw from './components/StateLaw';
import {
  Route, 
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={LawsList} />
        <Route exact path ='/state/:state?' component={StateLaw} />
      </Router>
    </div>
  );
}

export default App;
