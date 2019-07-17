import React from 'react';
import './todoFilter.css';

const TodoFilter = () => {
  return (
    <div className="btn-group">
      <button type="button"
              className="btn btn-info">
        Все
      </button>
      <button type="button"
              className="btn btn-outline-secondary">
        Активные
      </button>
      <button type="button"
              className="btn btn-outline-secondary">
        Выполненные
      </button>
    </div>
  );
}

export default TodoFilter;