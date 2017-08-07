let id = 0;

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      id += 1;
      return [
        ...state,
        { id, completed: false, text: action.text },
      ];
    default:
      return state;
  }
};
