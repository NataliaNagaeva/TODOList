import React, { Component } from 'react';
import './todoFilter.css';

export default class TodoFilter extends Component {
  render() {
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
}

// const TodoFilter = () => {
//   return (
//     <div className="btn-group">
//       <button type="button"
//               className="btn btn-info">
//         Все
//       </button>
//       <button type="button"
//               className="btn btn-outline-secondary">
//         Активные
//       </button>
//       <button type="button"
//               className="btn btn-outline-secondary">
//         Выполненные
//       </button>
//     </div>
//   );
// }

// export default TodoFilter;