import React from 'react';
import Modal from 'react-bootstrap/Modal';
import MyTop from './Top';
import CheckBox from './CheckBox'

class MyProgressModal extends React.Component {
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
              <CheckBox id="cbSem1" title="Semester 1" /> 
              <CheckBox id="cbSem2" title="Semester 2" /> 
              <CheckBox id="cbSem3" title="Semester 3" /> 
              <CheckBox id="cbSem4" title="Semester 4" /> 
              <CheckBox id="cbSem5" title="Semester 5" /> 
              <CheckBox id="cbSem6" title="Semester 6" /> 
              <CheckBox id="cbSem7" title="Semester 7" /> 
              <CheckBox id="cbSem8" title="Semester 8" /> 
            </div>

            <div id ='right'> 
              <CheckBox id="cbPass" title="Passed" /> 
              <CheckBox id="cbFail" title="Failed" />               
              <CheckBox id="cbGrade" title="Grade"  /> 
              <CheckBox id="cbMinor" title="Minor" /> 
              <CheckBox id="cbSpecialization" title="Specialization" /> 
            </div>
          </div>           

          <button className="button" onClick={this.props.onHide}>Apply Filters</button>         
      
        </Modal.Body>        
        </Modal>
      );
    }
  }
  export default MyProgressModal;