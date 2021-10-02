import React from 'react';
import Landing from './components/landing';
import Login from './components/login';
import Reset from './components/reset';
import Main from './components/main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path='/' exact component={Landing} />
      <Route path='/login' component={Login} />
      <Route path='/reset' component={Reset} />
      <Route path='/main' component={Main} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
