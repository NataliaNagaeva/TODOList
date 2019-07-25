import React, { Component } from 'react';
import Header from '../header';
import TodoControlPanel from '../todoControlPanel';
import TodoList from '../todoList';
import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: [
        {id: 0, text: 'Выучить Javascript', important: true},
        {id: 1, text: 'Выучить React.js', important: true},
        {id: 2, text: 'Найти работу', important: false}
      ]
    }

    this.deleteItem = (id) => {
      this.setState(({ todoItems }) => {
        const idx = todoItems.findIndex((el) => el.id === id);
        
        const resArr = [
          ...todoItems.slice(0, idx), 
          ...todoItems.slice(idx + 1)
        ];

        return {
          todoItems: resArr
        }
      });
    }
  }

  render() {
    const { todoItems } = this.state;

    return (
      <div className="app">
        <Header />
        <TodoControlPanel />
        <TodoList 
          items={todoItems}
          onDeleted={ this.deleteItem } />
      </div>
    );
  }
}

// const App = () => {
//   const todoItems = [
//     {id: 0, text: 'Выучить Javascript', important: true},
//     {id: 1, text: 'Выучить React.js', important: true},
//     {id: 2, text: 'Найти работу', important: false}
//   ];

//   return (
//     <div className="app">
//       <Header />
//       <TodoControlPanel />
//       <TodoList 
//         items={todoItems}
//         onDeleted={ (id) => console.log('del', id) } />
//     </div>
//   );
// }

// export default App;