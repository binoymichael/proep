import React, { Component }from 'react';
class Left extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false }

    
  }
  handleCheck= event =>
    this.setState({ checked: event.target.checked })

  render(){
    return (
      <form action="#">
        <p>
          <input type="checkbox" onChange={this.handleCheck} id="cbName" />
          <label htmlFor="cbName">{this.props.title}</label>         
        </p>  
      </form>
    );
  }  
}
export default Left;