import React from 'react';
import TodoListItem from '../todoListItem';
import './todoList.css';

const TodoList = ({ items }) => {
  const itemsJSX = items.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <li key={ id } className="list-group-item">
        <TodoListItem { ...itemProps } />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {itemsJSX}
    </ul>
  );
}

export default TodoList;