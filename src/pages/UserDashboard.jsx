import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      available: true
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
      available: true
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 39.99,
      available: false
    }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Available Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.filter(p => p.available).map(product => (
            <div key={product.id} className="border p-4 rounded-lg">
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-semibold">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Your Cart ({cart.length})</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="border-b py-2">
                <p>{item.name} - ${item.price}</p>
              </div>
            ))}
            <div className="mt-4 font-bold">
              Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Checkout
            </button>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
