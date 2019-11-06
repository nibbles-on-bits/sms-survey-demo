import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3400/api/login", this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/home");
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
            type="text"
          ></input>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
            type="text"
          ></input>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
