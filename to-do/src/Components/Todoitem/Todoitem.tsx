import * as React from 'react';

export type TodoItem = React.SFC<TodoItemProps>;

export interface TodoItemProps {
    name?: string;
}

export const TodoItem: TodoItem = (props) => {
    return <h1>Hello, {props.name}</h1>;
};

TodoItem.defaultProps = {
    name: 'default'
};
