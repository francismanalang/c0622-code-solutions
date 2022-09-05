import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTopic: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderTopics = this.renderTopics.bind(this);
  }

  renderTopics(topicsArray) {
    return topicsArray.map(topic => {
      const topicToggle = (topic.name !== this.state.openTopic) ? 'hidden' : '';
      return (
        <div key={topic.name}>
          <button onClick={this.handleClick} className='accordion-style' data-topic-name={topic.name}>{topic.name}</button>
          <div className={`panel-style ${topicToggle}`}>
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
      this.setState({ openTopic: '' });
    }
  }

  render() {
    return (
      <div className='accordion-container'>
        {this.renderTopics(this.props.topicsArray)}
      </div>
    );
  }
}
