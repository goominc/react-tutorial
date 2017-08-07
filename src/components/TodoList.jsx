import PropTypes from 'prop-types';
import React from 'react';

const TodoList = ({ onClick, todos }) => (
  <ul>
    {todos.map(({ completed, id, text }) => {
      const style = { textDecoration: completed ? 'line-through' : 'none' };
      return (
        <li style={style} key={id}>
          <div onClick={() => onClick(id)} role="button" tabIndex={id}>{text}</div>
        </li>
      );
    })}
  </ul>
);

TodoList.propTypes = {
  onClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default TodoList;
