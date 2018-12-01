import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Headnav from "./Views/Headnav.js";
import Bottomnav from "./Views/Bottomnav.js";
import SignIn from "./Views/SignIn.js";
import SignUp from "./Views/SignUp.js";
import NewTrip from "./Views/NewTrip.js";

class App extends Component {
  constructor(){
    super();
    this.state = {
      auth: false,
      token: ""
    };
    this.setAuth = this.setAuth.bind(this);
  }

  setAuth = (event) => {
    this.setState({
      auth: event.auth,
      token: event.token
    });
  }

  render() {
    return (
      <Router>
      <div className="App" style={{"display": "flex","minHeight": "100vh","boxSizing": "borderBox", "flexDirection": "column"}}>
        <header>
        <Headnav/>
        </header>
          <Route path="/SignIn" render={(props) => <SignIn sendAuth={this.setAuth}/>}/>
          <Route path="/SignUp" render={(props) => <SignUp sendAuth={this.setAuth}/>}/>
          <Route path="/request" render={(props) => <NewTrip token={this.state.token}/>}/>
          <footer style={{"marginTop": "auto"}}>
            <Bottomnav auth={this.state.auth}/>
          </footer>
      </div>

      </Router>
    );
  }
}

export default App;
