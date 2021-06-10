import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Search Bar",
      inputValue: "",
    };
    console.log("this.state", this.state);
  }

  handleChange(event) {
    console.log("this.state", this.state);
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <input
            className="form-control input-lg"
            type="text"
            placeholder={this.state.placeholder}
            onChange={this.handleChange.bind(this)}
          />
          <button className="btn" onClick={this.hendleClick.bind(this)}>
            Go
          </button>
        </div>
      </div>
    );
  }

  hendleClick() {
    console.log("click");
    this.props.callback(this.state.inputValue);
  }
}

export default SearchBar;
