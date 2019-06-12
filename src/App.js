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

    this.clientId = 'i376218-studyinsig';
    this.clientSecret = 'Pdr2bXdDAh3hB55ZM11Ehc6BPnBjesuqMcK5EQX8';
    this.state = { 
      modalShow: false,
      userLoggedIn: false,
			buildings: null
    };
  }

  findGetParameter(queryString, parameterName) {
    var result = null,
        tmp = [];
    queryString
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
    return result;
  }

  componentDidMount(){
    const route = window.location.pathname;
    if (route === '/dashboard') {
      let code = this.findGetParameter(window.location.search, 'code');
      if (code) {
        let params = `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/dashboard&client_id=${this.clientId}&client_secret=${this.clientSecret}`
        fetch('https://identity.fhict.nl/connect/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: params
				 }).then(response => {return response.json();})
				 .then(responseJson => { return responseJson['access_token']; })
				 .then(token => { this.fetchBuildings(token);});
      } else {
        // This is not a redirect from fontys. This is something else.
      }
    } else {
      console.log('User not logged in. Redirecting ...');
      const url = `https://identity.fhict.nl/connect/authorize?client_id=${this.clientId}&scope=fhict&redirect_uri=http://localhost:3000/dashboard&response_type=code`;
      window.location = url;
    }
  }

	fetchBuildings(token) {
		fetch('https://api.fhict.nl/buildings', {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		 }).then(function(response) {
				return response.json();
		 })
		 .then(responseJson => {
				this.setState({
					userLoggedIn: true,
					buildings: JSON.stringify(responseJson)
				});
		 });
	}

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      this.state.userLoggedIn && (<ButtonToolbar>
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

				<p>{this.state.buildings}</p>
      </ButtonToolbar>)
    );
  }
}

export default App;
