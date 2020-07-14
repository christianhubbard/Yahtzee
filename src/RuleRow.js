import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    return (
      <tr className={`RuleRow RuleRow-${this.props.score ? "disabled" : "active"}`} onClick={this.props.score ? null : this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score ? this.props.score : this.props.desc}</td>
      </tr>
    )
  }
}

export default RuleRow;