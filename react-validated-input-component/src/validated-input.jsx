import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    if (this.state.password.length === 0) {
      return (
  <form onSubmit={ this.handleSubmit }>
    <div>
      <label htmlFor="password-login">Password</label>
    </div>
    <input type="password" name='password' id='password-login' value={ this.state.password } onChange={ this.handlePasswordChange }/>
    <i className="fa-solid fa-xmark"></i>
    <p>A password is required</p>
  </form>
      );
    } else if (this.state.password.length < 8) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="password-login">Password</label>
          </div>
          <input type="password" name='password' id='password-login' value={this.state.password} onChange={this.handlePasswordChange} />
          <i className="fa-solid fa-xmark"></i>
          <p>Your password is too short</p>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="password-login">Password</label>
          </div>
          <input type="password" name='password' id='password-login' value={this.state.password} onChange={this.handlePasswordChange} />
          <i className="fa-solid fa-check"></i>
        </form>
      );
    }
  }
}
