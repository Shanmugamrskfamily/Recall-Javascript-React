import React from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoList from './TodoList'
import { TodoForm } from './TodoForm'


function App() {
  
  return (
  <TodoProvider>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <TodoForm/>
      <TodoList/>
    </div>
  </TodoProvider>
  )
}

export default App
