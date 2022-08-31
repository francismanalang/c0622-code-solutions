import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    if (this.state.clicks < 3) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 3 && this.state.clicks < 6) {
      return <button className='cold' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 6 && this.state.clicks < 9) {
      return <button className='warm' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 9 && this.state.clicks < 12) {
      return <button className='hot' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 12 && this.state.clicks < 15) {
      return <button className='hotter' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 15 && this.state.clicks < 18) {
      return <button className='hottest' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 18) {
      return <button className='nuclear'>Hot Button</button>;
    }
  }
}
