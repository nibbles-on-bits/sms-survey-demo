import React from "react";
import axios from "axios";
import { Route, withRouter, Link } from "react-router-dom";
import Styled from 'styled-components'


import startSurvey from "./components/startSurvey.js";
import Homepage from "./components/Homepage.js";
import Login from "./auth/Login.js";
import TestSurveys from "./components/TestSurveys";
import NavBar from './components/NavBar.js'
const DesktopContainer = Styled.div`
  width: 1000px;
  margin: 0 auto;
`

const Containter = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

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
      .get("http://216.194.120.70:18080/survey")
      .then(res => {
        this.setState({ stuff: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (

      <DesktopContainer>
        <Containter>
          <NavBar />
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Homepage} />
          <Route path="/start-survey" component={startSurvey} />
          <Route path="/survey" component={TestSurveys} />
          {/* <Route path="/survey" render={props => <Survey {...props} />} /> */}
        </Containter>
      </DesktopContainer>

    );
  }
}

export default App;