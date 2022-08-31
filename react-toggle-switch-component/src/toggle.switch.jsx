import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.toggleOn = this.toggleOn.bind(this);
    this.toggleOff = this.toggleOff.bind(this);
  }

  toggleOn() {
    this.setState({ isClicked: true });
  }

  toggleOff() {
    this.setState({ isClicked: false });
  }

  render() {
    if (this.state.isClicked) {
      return (
  <div className="container">
    <div className="toggle-container-on" onClick={ this.toggleOff }>
      <button className="toggle-switch-on" onClick={ this.toggleOff }></button>
    </div>
    <p onClick={ this.toggleOff }>ON</p>
  </div>
      );
    } else {
      return (
        <div className="container">
          <div className="toggle-container-off" onClick={ this.toggleOn }>
            <button className="toggle-switch-off" onClick={ this.toggleOn }></button>
          </div>
          <p onClick={this.toggleOn}>OFF</p>
        </div>
      );
    }
  }
}
