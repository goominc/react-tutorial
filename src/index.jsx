import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>{_.join(['Hello', 'World'], ' ')}</h1>,
  document.getElementById('root'),
);
