import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    return (
      <tr className={this.props.score ? "RuleRow RuleRow-disabled" : "RuleRow RuleRow-active"} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score && this.props.pts ? this.props.score : `This is a test`}</td>
      </tr>
    )
  }
}

export default RuleRow;