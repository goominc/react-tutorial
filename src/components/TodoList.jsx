import PropTypes from 'prop-types';
import React from 'react';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => <li key={todo}>{todo}</li>)}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;
