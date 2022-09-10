import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      images: this.props.images,
      intervalId: null
    };
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.handleRightClick, 3000) });
  }

  handleRightClick() {
    const imageIndexValueRight = this.state.imageIndex >= this.state.images.length - 1
      ? 0
      : this.state.imageIndex + 1;
    this.setState({ imageIndex: imageIndexValueRight });
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: setInterval(this.handleRightClick, 3000) });
  }

  handleLeftClick() {
    const imageIndexValueLeft = this.state.imageIndex <= 0
      ? this.state.images.length - 1
      : this.state.imageIndex - 1;
    this.setState({ imageIndex: imageIndexValueLeft });
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: setInterval(this.handleRightClick, 3000) });
  }

  buttonClick(event) {
    const index = Number(event.currentTarget.dataset.index);
    this.setState({ imageIndex: index });
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: setInterval(this.handleRightClick, 3000) });
  }

  render() {
    const { imageIndex, images } = this.state;
    const allButtons = images.map((image, index) => {
      const buttonType = imageIndex === index ? 'solid' : 'regular';
      return (
        <i key={index} data-index={index} className={`fa-${buttonType} fa-circle fa-xl`} onClick={this.buttonClick}></i>
      );
    });
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-fourth'>
            <div className='arrow-icon'>
              <i className="fas fa-angle-left fa-3x" onClick={this.handleLeftClick}></i>
            </div>
          </div>
          <div className='col-half'>
            <div className='image-wrapper'>
              <img src={`${images[imageIndex]}`} alt="image" />
            </div>
          </div>
          <div className='col-fourth'>
            <div className='arrow-icon'>
              <i className="fas fa-angle-right fa-3x" onClick={this.handleRightClick}></i>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-full'>
            <div className='icon-wrapper'>
              {allButtons}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
