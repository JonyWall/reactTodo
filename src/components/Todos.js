import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todos extends Component {

  constructor() {
    super();

    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(e) {
    console.log(e.target.value);
    this.props.deleteItem(e.target.value);
  }

  render() {
    let todosItems;
    todosItems = this.props.todos.map(todo => {
      return (
        <li key={todo.id}>{todo.description} <button onClick={this.deleteItem} value={todo.id}>X</button></li>
      )
    });
    return (
          <ul className='list'>
            {todosItems}
          </ul>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array,
  deleteItem: PropTypes.func
}

export default Todos;
