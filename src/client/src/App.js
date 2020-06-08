import React from 'react';
import './App.css';
import Nav from './components/nav';
import Login from './components/Login';
import Register from './components/Register';
import NewPassword from './components/NewPassword';
import User from './components/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Nav}/>
          <Route path="/User" exact component={User}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/NewPassword" component={NewPassword}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
