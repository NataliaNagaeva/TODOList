import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <h1>Список дел</h1>
  );
}

const SearchBlock = () => {
  return (
    <input type="search" placeholder="search" />
  );
}

const ToDoList = () => {
  return (
    <ul>
      <li>Изучить Javascript</li>
      <li>Изучить React</li>
      <li>Найти работу</li>
    </ul>
  );
}

const Main = () => {
  return (
    <div>
      <Header />
      <SearchBlock />
      <ToDoList />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));