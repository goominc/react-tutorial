import PropTypes from 'prop-types';
import React from 'react';

const AddTodo = ({ addTodo }) => {
  let input;
  const submit = (e) => {
    e.preventDefault();
    addTodo(input.value);
    input.value = '';
  };
  return (
    <form onSubmit={submit}>
      <input ref={node => (input = node)} />
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
