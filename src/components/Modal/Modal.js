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
            <Modal.Title id="contained-modal-title-vcenter">
              Filters
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MyTop
                show={this.state.Show}
            />
            <div className='rowC'>
                <Left 
                    show={this.state.Show}
                />
                <Right 
                    show={this.state.Show}
                />
            </div>           

            <Button variant="secondary" onClick={this.props.onHide}>Apply Filters</Button>         
      
          </Modal.Body>
        
        
        </Modal>
      );
    }
  }
  export default MyModal;