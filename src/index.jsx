import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const todoData = ['Running', 'Homework'];

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => <li>{todo}</li>)}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.string.isRequired,
};

ReactDOM.render(
  <div>
    <h1>Todo</h1>
    <TodoList todos={todoData} />
  </div>,
  document.getElementById('root'),
);
