import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from 'components/TodoList';

const todoData = [{
  id: 1,
  text: 'Running',
  completed: false,
}, {
  id: 2,
  text: 'Homework',
  completed: true,
}];

ReactDOM.render(
  <div>
    <h1>Todo</h1>
    <TodoList todos={todoData} />
  </div>,
  document.getElementById('root'),
);
