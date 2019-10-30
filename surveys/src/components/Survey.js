import React from "react";

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadSurvey = () => {};

  render() {
    console.log(this.props);
    return <h1>{this.props.surveys.name}</h1>;
  }
}

export default Survey;
