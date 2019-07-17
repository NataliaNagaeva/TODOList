import React from 'react';
import Header from '../header';
import TodoControlPanel from '../todoControlPanel';
import TodoList from '../todoList';
import './app.css';

const App = () => {
  const todoItems = [
    {id: 0, text: 'Выучить Javascript', important: true},
    {id: 1, text: 'Выучить React.js', important: true},
    {id: 2, text: 'Найти работу', important: false}
  ];

  return (
    <div className="app">
      <Header />
      <TodoControlPanel />
      <TodoList items={todoItems} />
    </div>
  );
}

export default App;