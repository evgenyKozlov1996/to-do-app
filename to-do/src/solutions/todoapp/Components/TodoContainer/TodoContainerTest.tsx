import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoContainer } from '.';
import { TodoItem } from '../Todoitem/Todoitem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const container = (
    <TodoContainer anchor="">
      <TodoItem id={1} name="test"/>
    </ TodoContainer>
  );
  ReactDOM.render(container, div);
});
