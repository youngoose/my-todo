import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onDelete, onUpdate }) {
  const { id, status, text } = todo;

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
    console.log('checked status: ', todo);
  };

  return (
    <li>
      <input
        type="checkbox"
        id={id}
        onChange={handleChange}
        checked={status === 'completed'}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
