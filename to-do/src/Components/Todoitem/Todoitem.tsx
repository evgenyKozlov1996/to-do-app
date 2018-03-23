import * as React from 'react';
import './Styles/ToDoItemStyle.css';

export type TodoItem = React.StatelessComponent<TodoItemProps>;

export interface TodoItemProps {
    id: number;
    name: string;
    description?: string;
    beginDate?: Date;
    endDate?: Date;
    onRemove?: (id: number) => void;
}

export const TodoItem: React.SFC<TodoItemProps> = (props) => {
    const toDoItem = (
        <div className="Card">
            <div className="CardContainer">
                <h2>{props.name}</h2>
                <h2>{props.description}</h2>
                <h2>{props.beginDate ? props.beginDate.toLocaleDateString() : ''}</h2>
                <h2>{props.endDate ? props.endDate.toLocaleDateString() : ''}</h2>
            </div>
        </div>
    );

    return toDoItem;
};

TodoItem.defaultProps = {
    name: 'default',
    description: 'default description',
    beginDate: new Date(2018, 2, 23),
    endDate: new Date(2018, 2, 23)
};
