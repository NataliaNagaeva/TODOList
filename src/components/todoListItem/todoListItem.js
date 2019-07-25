import React, { Component } from 'react';

import './todoListItem.css';

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.state = {
      important: false,
      done: false
    };

    this.onTextClick = () => {
      this.setState( ({done}) => {
        return {
          done: !done
        }
      });
    }

    this.onMarkImportant = () => {
      this.setState( ({important}) => {
        return {
          important: !important
        }
      });
    }
  }

  render() {
    const { text, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }
  
    return (
      <div className={ classNames }>
        <span className="todo-list-item_label"
              onClick={ this.onTextClick }>
          { text }
        </span>
        <div className="todo-list-item_controls">
          <button type="btn"
                  className="btn btn-outline-success btn-sm"
                  title="Пометить важным"
                  onClick={ this.onMarkImportant }>
            <i className="fa fa-exclamation"></i>
          </button>
          <button type="btn"
                  className="btn btn-outline-danger btn-sm"
                  title="Удалить"
                  onClick={ onDeleted }>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    ); 
  }
}

// const TodoListItem1 = ({ text, important = false }) => {
  
//   const itemStyle = {
//     color: important ? '#cc1c1c' : 'black'
//   };

//   return (
//     <div className="todo-list-item">
//       <span className="todo-list-item_label"
//             style={ itemStyle }>
//         { text }
//       </span>
//       <div className="todo-list-item_controls">
//         <button type="btn"
//                 className="btn btn-outline-success btn-sm">
//           <i className="fa fa-exclamation"></i>
//         </button>
//         <button type="btn"
//                 className="btn btn-outline-danger btn-sm">
//           <i className="fa fa-trash-o"></i>
//         </button>
//       </div>
//     </div>
//   ); 
// }

// export default TodoListItem;