import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="username">
          UserName
          <input type="text" name="username" onChange={this.handleUsernameChange} value={this.state.username}/>
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name='password' onChange={this.handlePasswordChange} value={this.state.password}/>
        </label>
        <button>Sign Up</button>
      </form>
    );
  }
}

const element = <RegistrationForm />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
