import React from 'react';
import Modal from 'react-bootstrap/Modal';
import MyTop from './Top';
import CheckBox from './CheckBox'

class MyCourseModal extends React.Component {
    constructor(...args) {
        super(...args);
    
        this.state = { Show: true };
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
              <CheckBox id="cb1" title="Year 1" /> 
              <CheckBox id="cb2" title="Year 2" /> 
              <CheckBox id="cb3" title="Year 3" /> 
              <CheckBox id="cb4" title="Year 4" /> 
            </div>

            <div id ='right'> 
              <CheckBox id="cbAll" title="All Courses"  /> 
              <CheckBox id="cbElectives" title="Electives" /> 
              <CheckBox id="cbEl" title="Eligible" /> 
              <CheckBox id="cbNon-El" title="Non-Eligible"  /> 
              <CheckBox id="cbPassed" title="Passed" /> 
              <CheckBox id="cbFailed" title="Failed" /> 
            </div>
          </div>           

          <button className="button" onClick={this.props.onHide}>Apply Filters</button>         
      
        </Modal.Body>        
        </Modal>
      );
    }
  }
  export default MyCourseModal;