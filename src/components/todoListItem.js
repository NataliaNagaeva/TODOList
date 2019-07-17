import React from 'react';
import './todoListItem.css';

const TodoListItem = ({ text, important = false }) => {
  
  const itemStyle = {
    color: important ? '#cc1c1c' : 'black'
  };

  return (
    <div className="todo-list-item">
      <span className="todo-list-item_label"
            style={ itemStyle }>
        { text }
      </span>
      <div className="todo-list-item_controls">
        <button type="btn"
                className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation"></i>
        </button>
        <button type="btn"
                className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  ); 
}

export default TodoListItem;