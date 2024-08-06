import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items, onDelete }) => {
  return (
    <div className="container">
      <h1>Item List</h1>
      <Link to="/create">
        <button>Create New Item</button>
      </Link>
          <ul style={{ padding: "15px" }}>
        {items.map(item => (
            <li key={item.id} style={{ padding: "15px" }}>
            {item.name}
                <Link style={{ padding: "15px" }} to={`/edit/${item.id}`}><button>Edit</button></Link>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
