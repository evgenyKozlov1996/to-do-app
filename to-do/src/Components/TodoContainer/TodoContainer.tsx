import * as React from 'react';
import { TodoItemProps } from '../Todoitem/Todoitem';

export type TodoContainer = React.StatelessComponent<TodoContainerProps>;

type TodoItem = React.ReactElement<TodoItemProps> | null;

export interface TodoContainerProps {
    anchor?: string;
    items?: TodoItem[];
}

export const TodoContainer: React.SFC<TodoContainerProps> = (props) => {
    return (
        <div>
            <h1>{props.anchor}</h1>
            {props.items}
        </div>);
    };

TodoContainer.defaultProps = {
    items: []
};
