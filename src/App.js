import React from 'react';
import Filter from './Components/Filter';
import Maps from './Components/Maps';
import './App.scss';
import Carte from './Components/Maps';
import List from './Components/List';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Filter />
      <Maps />

      <Router>
            <div className="button">
              <div className="button-item btn_cart">
                <Link to='./'>
                  <p>Carte</p>
                </Link>
              </div>

              <div className="button-item btn_list">
                <Link to='./list'>
                  <p>Liste</p>
                </Link>
              </div>
            </div>

            <div className="filter_container">
              <Link to='./filter'>
                <div className="filter_innerbox"></div>
              </Link>
            </div>

          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/filter">
              <Filter />
            </Route>
            <Route path="/">
              <Carte />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;