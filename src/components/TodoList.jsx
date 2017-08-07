import PropTypes from 'prop-types';
import React from 'react';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(({ completed, id, text }) => {
      const style = { textDecoration: completed ? 'line-through' : 'none' };
      return <li style={style} key={id}>{text}</li>;
    })}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default TodoList;
