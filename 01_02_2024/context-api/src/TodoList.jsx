import React from 'react';
import { useTodoContext } from './context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div className='divide-y divide-gray-200'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
