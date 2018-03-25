import * as React from 'react';
import { TodoItemProps } from '../Todoitem/Todoitem';
import { GridList, Subheader } from 'material-ui';

export type TodoContainerType = React.StatelessComponent<TodoContainerProps>;

type TodoItem = React.ReactElement<TodoItemProps> | null;

export interface TodoContainerProps {
    anchor?: string;
    children: TodoItem[] | TodoItem;
    cols?: number;
}

export const TodoContainer: React.SFC<TodoContainerProps> = (props) => {
    return (
        <GridList cols={props.cols}>
            <Subheader >
                {props.anchor}
            </Subheader>
            {props.children}
        </GridList>
        );
    };

TodoContainer.defaultProps = {
    cols: 2
};
