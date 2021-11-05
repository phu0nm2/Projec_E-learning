import React, { Component } from "react";
import Detail from "./views/Detail";
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import { connect } from "react-redux";
// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { fetchMe } from "./store/actions/auth";
import { AuthRoute, PrivateRoute } from "./HOCs/route";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/detail/:id" component={Detail} />
            <AuthRoute path="/signin" component={Signin} redirectPath="/" />
            <AuthRoute path="/signup" component={Signup} redirectPath="/" />
            <PrivateRoute
              path="/"
              component={Home}
              redirectPath="/signin"
            ></PrivateRoute>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchMe);
  }
}
export default connect()(App);
