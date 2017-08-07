import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({ dispatch, todos }) => (
  <ul>
    {todos.map(({ completed, id, text }) => {
      const style = { textDecoration: completed ? 'line-through' : 'none' };
      const toggleCompleted = () => dispatch({ type: 'TOGGLE_COMPLETED', id });
      return (
        <li style={style} key={id}>
          <div onClick={toggleCompleted} role="button" tabIndex={id}>{text}</div>
        </li>
      );
    })}
  </ul>
);

TodoList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect()(TodoList);
