import React from 'react';
import Nav from './Nav';
import LawsList from './components/LawsList';
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
        <Route exact path='/' component={Home} />
        <Route exact path='/laws/types' component={LawsList} />
        <Route exact path ='/laws' component={StateLaw} />
    </div>
      </Router>
  );
}
const Home = () => (
  <div>
    <h1>Law Recall</h1>
  </div>
);

export default App;
