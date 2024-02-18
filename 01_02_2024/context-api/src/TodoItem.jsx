import React from 'react';
import { deleteTodo, updateTodo } from './context/TodoContext';

const TodoItem = ({ todo }) => {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleToggle = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  return (
    <div className={`flex items-center justify-between py-2 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
      <span>{todo.text}</span>
      <div>
        <button className="mx-2" onClick={handleToggle}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
