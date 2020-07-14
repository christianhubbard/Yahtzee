import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    const classArray = [null, "one", "two", "three", "four", "five", "six"];
    return (
      <button
        className={this.props.val ? `Die fas fa-dice-${classArray[this.props.val]}` : `Die`}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={() => {this.props.handleClick(this.props.idx)}}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
