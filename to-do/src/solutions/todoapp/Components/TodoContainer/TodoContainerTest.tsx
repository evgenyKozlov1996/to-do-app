import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoContainer } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoContainer anchor=""/>, div);
});
