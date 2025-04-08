
import React from 'react';

const BusinessProfile = () => {
  const business = {
    name: "Ahmad's Merchandise",
    type: "Private",
    description: "High-quality merchandise for everyday use.",
    contact: "ahmadraja1234@outlook.com",
    logo: "https://via.placeholder.com/150",
    banner: "https://via.placeholder.com/900x200",
    services: [
      { name: "T-Shirts", price: "$25" },
      { name: "Hats", price: "$15" },
      { name: "Mugs", price: "$10" }
    ]
  };

  return (
    <div className="p-6">
      <img src={business.banner} alt="Banner" className="rounded mb-4 w-full max-h-64 object-cover" />
      <div className="bg-white shadow p-4 rounded flex items-center gap-6">
        <img src={business.logo} alt="Logo" className="w-24 h-24 rounded-full border" />
        <div>
          <h2 className="text-2xl font-bold">{business.name}</h2>
          <p><strong>Type:</strong> {business.type}</p>
          <p><strong>Contact:</strong> {business.contact}</p>
          <p className="mt-2">{business.description}</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">Products & Services</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {business.services.map((item, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <p className="font-bold">{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessProfile;
