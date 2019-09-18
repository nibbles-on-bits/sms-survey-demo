import React from "react";
import axios from 'axios'
import { Route, withRouter, Link } from "react-router-dom";

import startSurvey from './components/startSurvey.js'
import Home from './components/homepage.js'

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
    this.getStuff()
  }

  getStuff = () => {
    axios
      .get('http://home.mevise.com:3050')
      .then(res => {
        this.setState({ stuff: res.data })
      })
      .catch(err => { console.log(err) })
  }

  render() {
    return (
      <>
        <Route path="/" exact component={Home} />
        <Route path='/start-survey' exact component={startSurvey} />
        {/* <Route path="/survey" render={props => <Survey {...props} />} /> */}
      </>
    )
  }
}

export default App;
