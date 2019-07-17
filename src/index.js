import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import TodoControlPanel from './components/todoControlPanel';
import TodoList from './components/todoList';
import './index.css';

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

ReactDOM.render(<App />, document.getElementById('root'));