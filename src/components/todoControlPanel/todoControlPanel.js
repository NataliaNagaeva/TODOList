import React from 'react';
import SearchBlock from '../searchBlock';
import TodoFilter from '../todoFilter';
import './todoControlPanel.css';

const TodoControlPanel = () => {
  return (
    <div className="todo-control-panel">
      <SearchBlock />
      <TodoFilter/>
    </div>
  );
}

export default TodoControlPanel;