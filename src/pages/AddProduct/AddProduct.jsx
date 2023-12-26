import React, { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://dummyjson.com/products/add', {
        title: title,
        description: description
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h3 className="my-3 text-center">Add Product</h3>
      <form onSubmit={handleAdd}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}
