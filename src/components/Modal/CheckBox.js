import React, { Component }from 'react';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false }  
    this.handleCheck = this.handleCheck.bind(this);  
  }
  handleCheck= event =>
    this.setState({ checked: event.target.checked })

  render(){
    return (
      <form action="#">
        <p>
          <input id={this.props.id} checked={this.state.checked} type="checkbox" onChange={this.handleCheck}/>
          <label htmlFor={this.props.id}> {this.props.title} </label>         
        </p>          
      </form>
    );
  }  
}
export default CheckBox;