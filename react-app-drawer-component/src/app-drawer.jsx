import React from 'react';

export default class AppDrawer extends React.Component {
  render() {
    return (
    <div>
      <div>
        <i className="fa-solid fa-bars fa-2x"></i>
      </div>
      <div className='drawer-container'></div>
    </div>
    );
  }
}
