import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyCourseModal from './components/Modal/CourseModal';
import MyProgressModal from './components/Modal/ProgressModal';
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
          onClick={() => this.setState({ modalShow: true })} > Filter 1
        </Button>

        <Button
          variant="secondary" 
          onClick={() => this.setState({ modalShow: true })} > Filter 2
        </Button>

        <MyCourseModal
          show={this.state.modalShow}
          onHide={modalClose}
        />

        <MyProgressModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    );
  }
}

export default App;
