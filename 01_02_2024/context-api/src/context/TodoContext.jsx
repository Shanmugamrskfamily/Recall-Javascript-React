import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define initial state
const initialState = {
  todos: [],
};

// Define actions
const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

// Define reducer function
const todoReducer = (state, action) => {
console.log(`Todo: ${state.todo}\nAction Type: ${action.type} \nPayLoad: ${action.payload}`);
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload,
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.payload.id ? action.payload : todo)),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

// Create context
const TodoContext = createContext();

// Create provider component
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      dispatch({ type: 'SET_TODOS', payload: storedTodos });
    }
  }, []);

  // Sync todos to local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ todos: state.todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook for consuming todo context
export const useTodoContext = () => useContext(TodoContext);

// Action creators for CRUD operations
export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const updateTodo = todo => ({ type: UPDATE_TODO, payload: todo });
export const deleteTodo = todoId => ({ type: DELETE_TODO, payload: todoId });

