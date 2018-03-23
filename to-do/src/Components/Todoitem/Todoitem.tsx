import * as React from 'react';

export type TodoItem = React.StatelessComponent<TodoItemProps>;

export interface TodoItemProps {
    name?: string;
}

export const TodoItem: React.SFC<TodoItemProps> = (props) => {
    return <h1>Hello, {props.name}</h1>;
};

TodoItem.defaultProps = {
    name: 'default'
};
