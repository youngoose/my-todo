import React from 'react';
import { useState } from 'react';
import AddTodo from './AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };

  return (
    <section>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
