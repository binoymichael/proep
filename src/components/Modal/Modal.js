import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MyTop from './Top';
import Left from './Left'
import Right from './Right'

class MyModal extends React.Component {
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
                <div id ='left'> <Left show={this.state.Show} /> </div>
                <div id ='right'> <Right show={this.state.Show} /> </div>
            </div>           

            <button class="button" onClick={this.props.onHide}>Apply Filters</button>         
      
          </Modal.Body>
        
        
        </Modal>
      );
    }
  }
  export default MyModal;