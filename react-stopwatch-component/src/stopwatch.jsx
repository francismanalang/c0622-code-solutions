import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isTicking: false,
      intervalId: null
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    this.intervalId = setInterval(() => this.setState({ seconds: this.state.seconds + 1 }), 1000);
    this.setState({ isTicking: true });
  }

  pause() {
    clearInterval(this.intervalId);
    this.setState({ isTicking: false });
  }

  reset() {
    this.setState({
      seconds: 0,
      isTicking: false,
      intervalId: null
    });
  }

  render() {
    if (this.state.isTicking) {
      return (
        <div>
          <button>{this.state.seconds}</button>
          <div className="icon">
            <i className="fa-solid fa-pause fa-3x" onClick={ this.pause }></i>
        </div>
      </div>
      );
    } else if (!this.state.isTicking) {
      return (
        <div>
          <button onClick={this.reset}>{this.state.seconds}</button>
          <div className="icon">
            <i className="fa-solid fa-play fa-3x" onClick={this.start}></i>
          </div>
        </div>
      );
    }
  }
}

// return (
//   <div>
//     <button>{this.state.seconds}</button>
//     <div className="icon">
//       <i className="fa-solid fa-play fa-3x" onClick={this.start}></i>
//     </div>
//   </div>
// );
