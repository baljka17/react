import React, { Component } from "react";
import "./style.css";

export class Comment extends Component {
  constructor() {
    super();
    this.state = {
      publisher: "",
      comment: "",
    };
  }

  toWrite = (e) => {
    console.log(e);
    this.setState({ comment: e.target.value });
  };
  render() {
    return (
      <div>
        {this.state.comment}
        <br />
        <textarea className="myTextArea" onChange={this.toWrite}></textarea>
        <br />
        <input type="button" value="Add comment" />
      </div>
    );
  }
}
