import React, { Component } from 'react';

import TodoList from 'components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{
        id: 1,
        text: 'Running',
        completed: false,
      }, {
        id: 2,
        text: 'Homework',
        completed: true,
      }],
    };
  }

  render() {
    const toggleCompleted = (id) => {
      const todos = this.state.todos.map(todo => (
        todo.id !== id ? todo : Object.assign({}, todo, { completed: !todo.completed })));
      this.setState({ todos });
    };
    return (
      <div>
        <h1>Todo</h1>
        <TodoList todos={this.state.todos} onClick={toggleCompleted} />
      </div>
    );
  }
}

export default App;
