import React from 'react';
import Modal from 'react-bootstrap/Modal';
import MyTop from './Top';
import Left from './Left'
import Right from './Right'

class MyModal extends React.Component {
    constructor(...args) {
        super(...args);
    
        this.state = { Show: true };
      }
   
    checkboxTitle = (newTitle) => {
      this.setState({title:newTitle})
    }
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        <Modal.Header closeButton>
          <div id="contained-modal-title-vcenter">
            <h3>Filters</h3>
          </div>
        </Modal.Header>
        <Modal.Body>
          <MyTop show={this.state.Show} />

          <div id='wrapper'>
            <div id ='left'> 
              <Left title="Year 1" checkboxName={this.checkboxTitle.bind(this, "Year 1")} show={this.state.Show} /> 
              <Left title="Year 2" checkboxName={this.checkboxTitle.bind(this, "Year 2")} show={this.state.Show} /> 
              <Left title="Year 3" checkboxName={this.checkboxTitle.bind(this, "Year 3")} show={this.state.Show} /> 
              <Left title="Year 4" checkboxName={this.checkboxTitle.bind(this, "Year 4")} show={this.state.Show} /> 
            </div>

            <div id ='right'> 
              <Left title="All Courses" checkboxName={this.checkboxTitle.bind(this, "All Courses")} show={this.state.Show} /> 
              <Left title="Electives" checkboxName={this.checkboxTitle.bind(this, "Electives")} show={this.state.Show} /> 
              <Left title="Eligible" checkboxName={this.checkboxTitle.bind(this, "Eligible")} show={this.state.Show} /> 
              <Left title="Non-Eligible" checkboxName={this.checkboxTitle.bind(this, "Non-Eligible")} show={this.state.Show} /> 
              <Left title="Passed" checkboxName={this.checkboxTitle.bind(this, "Passed")} show={this.state.Show} /> 
              <Left title="Failed" checkboxName={this.checkboxTitle.bind(this, "Failed")} show={this.state.Show} /> 
            </div>
          </div>           

          <button className="button" onClick={this.props.onHide}>Apply Filters</button>         
      
        </Modal.Body>        
        </Modal>
      );
    }
  }
  export default MyModal;