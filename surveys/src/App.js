import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      client: "",
      survey: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Surveys!</h1>
        <form>
          <input
            type="text"
            placeholder="Type Client Name"
            onChange={this.handleChanges}
          />
          <input
            type="text"
            placeholder="Type Client Survey Name"
            onChange={this.handleChanges}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
