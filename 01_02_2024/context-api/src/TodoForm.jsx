import React, { useState } from 'react';
import { addTodo } from './context/TodoContext';

export const TodoForm = () => {
    const [text, setText] = useState('');
    const [err,setErr]=useState(false);

    const handleChange = (event) => {
        setText(event.target.value);
        console.log('Text: ',text);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text.trim()) {
            setErr(true); 
            return; 
        }
        setErr(false); 
        addTodo({ id: Date.now(), text, completed: false });
        setText('');
    }

    return (
        <form onSubmit={handleSubmit} className='mt-4'>
            <input
                type='text'
                value={text}
                onChange={handleChange}
                placeholder='Enter your new todo item here'
                className='border border-gray-300 p-2 rounded-md w-full'
            />
            <div className='text-center'>
            {err&&(<p className="text-red-500">Todo item cannot be empty!</p>)}
                <button type='submit' className='mt-2 py-2 px-4 bg-blue-500 text-white rounded-md'>Add Todo</button>
            </div>
        </form>
    );
}
