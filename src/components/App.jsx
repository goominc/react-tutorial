import React from 'react';

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

const toggleCompleted = (id) => {
  const todo = todoData.find(t => t.id === id);
  todo.completed = !todo.completed;
};

const App = () => (
  <div>
    <h1>Todo</h1>
    <TodoList todos={todoData} onClick={toggleCompleted} />
  </div>
);

export default App;
