import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Books from './pages/Books';
import Authors from './pages/Authors';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/books" component={Books}/>
            <Route path="/authors" component={Authors}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
