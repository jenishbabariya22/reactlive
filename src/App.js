import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import CreateItem from './components/CreateItem';
import EditItem from './components/EditItem';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  let nextId = items.length ? Math.max(items.map(item => item.id)) + 1 : 1;

  const createItem = (item) => {
    setItems([...items, { id: nextId++, ...item }]);
  };

  const updateItem = (id, updatedItem) => {
    setItems(items.map(item => (item.id === parseInt(id) ? { ...item, ...updatedItem } : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList items={items} onDelete={deleteItem} />} />
        <Route path="/create" element={<CreateItem onCreate={createItem} />} />
        <Route path="/edit/:id" element={<EditItem items={items} onUpdate={updateItem} />} />
      </Routes>
    </Router>
  );
};

export default App;
