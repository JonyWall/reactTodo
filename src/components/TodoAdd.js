import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoAdd extends Component {

  constructor() {
    super();

    this.add = this.add.bind(this);
  }

  add(event) {
    if (event.key === 'Enter' && event.target.value) {
        this.props.addTodoItem(event.target.value);
        event.target.value = '';
    }
  }

  render() {
    return (
      <div className='todo-add'>
        <input type="text" placeholder='type todo task here'
        onKeyPress={this.add}
        />
      </div>
    )
  }
}

TodoAdd.propTypes = {
  addTodoItem: PropTypes.function
}

export default TodoAdd;
