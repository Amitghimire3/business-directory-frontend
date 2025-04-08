import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    available: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, newProduct]);
    setNewProduct({
      name: '',
      description: '',
      price: 0,
      stock: 0,
      available: false
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Business Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Description</label>
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Stock</label>
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="available"
              checked={newProduct.available}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>Available</label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Your Products</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="font-semibold">${product.price}</p>
                <p>Stock: {product.stock}</p>
                <p className={product.available ? 'text-green-600' : 'text-red-600'}>
                  {product.available ? 'Available' : 'Not Available'}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No products added yet</p>
        )}
      </div>
    </div>
  );
};

export default BusinessDashboard;
