import React from 'react';
import { useAppDispatch } from './app/hooks';
import {
  addTodo
} from './app/todoSlice'
import Todo from './Todo';

function App() {
  const dispatch = useAppDispatch();
  let newTodoInput: HTMLInputElement | null = null;

  function onAddTodoClick() {
    const newTodoName = newTodoInput?.value;
    if (!newTodoName || newTodoName.trim() === '') {
      alert('Please input todo name!');
      return;
    }
    dispatch(addTodo(newTodoName));

    if (newTodoInput) {
      newTodoInput.value = '';
    }
  }
  return (
    <div>
      <h2>Todo list</h2>
      <div>
        <input ref={input => newTodoInput = input} type="text"></input>
        <button onClick={() => onAddTodoClick()}> add todo </button>
      </div>
      <Todo title="UnFinished" isFinish={false}></Todo>
      <Todo title="Finished" isFinish={true}></Todo>
    </div>
  );
}

export default App;
