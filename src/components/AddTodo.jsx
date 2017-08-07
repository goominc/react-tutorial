import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const AddTodo = ({ dispatch }) => {
  let input;
  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: input.value });
    input.value = '';
  };
  return (
    <form onSubmit={submit}>
      <input ref={node => (input = node)} />
    </form>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
