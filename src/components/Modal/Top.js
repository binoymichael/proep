import React, { Component } from "react";
import { MDBFormInline, MDBInput } from "mdbreact";

class MyTop extends Component {
state = {
  radio: ""
}

onClick = nr => () => {
  this.setState({
    radio: nr
  });
}

render() {
  return (
      <MDBFormInline>
        <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio===1 ? true : false} label="Software" type="radio" id="radio1" />
        <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio===2 ? true : false} label="Technology" type="radio" id="radio2" />
        <MDBInput gap onClick={this.onClick(3)} checked={this.state.radio===3 ? true : false} label="Business" type="radio" id="radio3" />
      </MDBFormInline>
    );
  }
}

export default MyTop;