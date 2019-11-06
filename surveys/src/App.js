import React from "react";
import axios from "axios";
import { Route, withRouter, Link } from "react-router-dom";

import startSurvey from "./components/startSurvey.js";
import Home from "./components/homepage.js";
import Login from "./auth/Login.js";
import TestSurveys from "./components/TestSurveys";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stuff: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.getStuff();
  }

  getStuff = () => {
    axios
      //.get("http://home.mevise.com:3050")
      .get("http://localhost:8080/survey")
      .then(res => {
        this.setState({ stuff: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/start-survey" component={startSurvey} />
        <Route path="/test-surveys" component={TestSurveys} />
        {/* <Route path="/survey" render={props => <Survey {...props} />} /> */}
      </>
    );
  }
}
// hello
export default App;