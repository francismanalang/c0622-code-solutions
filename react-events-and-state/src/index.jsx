import React from 'react';
import ReactDom from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return <button>Thanks!</button>;
    } else {
      return <button onClick={ this.handleClick }>Click me!</button>;
    }
  }

}

const element = <CustomButton />;

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(element);
