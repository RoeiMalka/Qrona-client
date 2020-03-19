import React from 'react';
import './App.css';
import List from './List.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
