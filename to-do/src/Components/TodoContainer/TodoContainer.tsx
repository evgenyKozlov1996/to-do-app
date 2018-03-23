import * as React from 'react';
import { TodoItem } from '../Todoitem/Todoitem';

export type TodoContainer = React.SFC<TodoContainerProps>;

export interface TodoContainerProps {
    items: TodoItem[];
}
export const TodoContainer: TodoContainer = (props) => {
    return <h1>container</h1>;
};

TodoContainer.defaultProps = {
    items: []
};
