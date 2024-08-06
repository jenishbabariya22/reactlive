import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateItem = ({ onCreate }) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name });
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Create New Item</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateItem;
