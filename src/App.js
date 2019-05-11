import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyModal from './components/Modal/Modal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <ButtonToolbar>
        <Button
          variant="secondary" 
          onClick={() => this.setState({ modalShow: true })}
        > Show
        </Button>

        <MyModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    );
  }
}

export default App;
