import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodosFromServer extends Component {

  constructor() {
    super();

    // this.deleteItem = this.deleteItem.bind(this);
  }

  // deleteItem(e) {
  //   console.log(e.target.value);
  //   this.props.deleteItem(e.target.value);
  // }

  render() {
    let todosItems;
    todosItems = this.props.todos.map(todo => {
      return (
        <li key={todo.id}>{todo.title}</li>
      )
    });
    return (
        <ul className='list tab'>
          {todosItems}
        </ul>
    );
  }
}

TodosFromServer.propTypes = {
  todos: PropTypes.array,
}

export default TodosFromServer;
