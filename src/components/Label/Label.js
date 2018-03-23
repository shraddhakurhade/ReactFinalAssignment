import React, {Component} from "react";

export default class Select extends Component {

  updateValue = (event) => {
    const interviewer = event.target.value;
    this.props.updateInterviewer(interviewer);

  }

  render() {
    return (
      <label class="control-label col-sm-3 text-right">{this.props.labelValue}</label>
        );
  }
}
