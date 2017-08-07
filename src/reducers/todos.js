let id = 0;

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      id += 1;
      return [
        ...state,
        { id, completed: false, text: action.text },
      ];
    case 'TOGGLE_COMPLETED': {
      const todos = Array.from(state);
      const index = todos.findIndex(todo => todo.id === action.id);
      if (index !== -1) {
        const todo = todos[index];
        todos[index] = Object.assign({}, todo, { completed: !todo.completed });
      }
      return todos;
    }
    default:
      return state;
  }
};
