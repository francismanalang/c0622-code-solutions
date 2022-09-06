import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    const modalToggle = (this.state.modalOpen) ? '' : 'hidden';
    return (
      <div className='drawer-container'>
        <i className="fa-solid fa-bars fa-2x" onClick={this.handleClick}></i>
        <div className={`modal-view ${modalToggle}`}>
          <div className='modal-container'>
            <div className='modal-display dark-background' onClick={this.handleClick}></div>
            <div className='modal'>
              <button className='menu-button' onClick={this.handleClick}>Menu</button>
              <button onClick={this.handleClick}>About</button>
              <button onClick={this.handleClick}>Get Started</button>
              <button onClick={this.handleClick}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
