import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTopic: null
    };
    this.renderTopic = this.renderTopic.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  renderTopic(topicsArray) {
    return topicsArray.map(topic => {
      const hideTopic = (topic.name !== this.state.openTopic) ? 'hidden' : '';
      return (
        <div key={topic.name} className='topic-group'>
          <button onClick={this.handleClick} className='accordion-style' data-topic-name={topic.name}>{topic.name}</button>
          <div className={`panel-style ${hideTopic}`}>
            <p>
              {topic.text}
            </p>
          </div>
        </div>
      );
    });
  }

  handleClick(event) {
    if (this.state.openTopic !== event.currentTarget.dataset.topicName) {
      this.setState({ openTopic: event.currentTarget.dataset.topicName });
    } else {
      this.setState({ openTopic: null });
    }
  }

  render() {
    return (
      <div className='accordion-container'>
        {this.renderTopic(this.props.topicsArray)}
      </div>
    );
  }
}
