import React, { Component } from 'react';

import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { id: 0, todos: [] };
  }

  render() {
    const addTodo = (text) => {
      const id = this.state.id + 1;
      const todo = { id, text, completed: false };
      const todos = Array.from(this.state.todos);
      todos.push(todo);
      this.setState({ id, todos });
    };
    const toggleCompleted = (id) => {
      const todos = this.state.todos.map(todo => (
        todo.id !== id ? todo : Object.assign({}, todo, { completed: !todo.completed })));
      this.setState({ todos });
    };
    return (
      <div>
        <h1>Todo</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={this.state.todos} onClick={toggleCompleted} />
      </div>
    );
  }
}

export default App;
