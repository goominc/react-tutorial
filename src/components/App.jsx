import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';

const App = ({ todos }) => (
  <div>
    <h1>Todo</h1>
    <AddTodo />
    <TodoList todos={todos} />
  </div>
);

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(
  state => ({ todos: state.todos }),
)(App);
