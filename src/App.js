import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Headnav from "./Views/Headnav.js";
import SignIn from "./Views/SignIn.js";
import SignUp from "./Views/SignUp.js";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header>
        <Headnav/>
        </header>
          <Route path="/SignIn" component={SignIn}/>
          <Route path="/SignUp" component={SignUp}/>
      </div>
      </Router>
    );
  }
}

export default App;
