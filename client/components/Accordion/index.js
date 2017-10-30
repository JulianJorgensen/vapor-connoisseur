import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import styles from './index.css';

export default class Accordion extends Component {
  constructor() {
    super();

    this.state = {
      selected: null,
    };
  }

  handleUpdate = () => {
    setTimeout(() => {
      console.log('handling accordion update');
      this.props.handleUpdate();
    }, 250);
  };

  render() {
    let { className } = this.props;
    return (
      <div className={className}>
        {this.props.children.map((item, index) => {
          const title = item.props.children[0].props.children;
          const content = item.props.children[1].props.children;
          let selected;

          return (
            <button
              key={index}
              className={`${styles.item} ${this.state.selected === index ? styles.active : ''}`}
              onClick={() => {
                selected = (index === this.state.selected ? null : index)
                this.setState({
                  selected,
                }, () => {
                  this.handleUpdate();
                });
              }}
            >
              <div className={styles.title}>{title}</div>
              <Collapse
                isOpened={this.state.selected === index}
                springConfig={{ stiffness: 200, damping: 20 }}
              >
                <div className={styles.content}>{content}</div>
              </Collapse>
            </button>
          );
        })}
      </div>
    );
  }
}
