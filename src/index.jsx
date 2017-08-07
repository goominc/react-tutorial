import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from 'components/TodoList';

const todoData = ['Running', 'Homework'];

ReactDOM.render(
  <div>
    <h1>Todo</h1>
    <TodoList todos={todoData} />
  </div>,
  document.getElementById('root'),
);
