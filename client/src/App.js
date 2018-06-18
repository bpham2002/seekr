import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/trails" component={Login} />
            <Route exact path="/trails/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
