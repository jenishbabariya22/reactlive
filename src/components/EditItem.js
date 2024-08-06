import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditItem = ({ items, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items.find(item => item.id === parseInt(id));
  const [name, setName] = useState(item ? item.name : '');

  useEffect(() => {
    if (item) setName(item.name);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(id, { name });
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditItem;
