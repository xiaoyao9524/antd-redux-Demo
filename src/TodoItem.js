import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render () {
    const { handlerClickMethods, index, content, test } = this.props;
    return (
      <li 
        onClick={() => {
          handlerClickMethods(index)
        }}
      >{test}-{content}</li>
    )
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number.isRequired,
  handlerClickMethods: PropTypes.func
}

TodoItem.defaultProps = {
  test: 'Hello World'
}

export default TodoItem;
