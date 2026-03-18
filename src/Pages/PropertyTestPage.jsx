import React, { useState } from "react";

export default function PropertyTestPage() {
  const properties = [
    { id: 1, name: "Green Villa", city: "Delhi", price: 50000, type: "Villa" },
    {
      id: 2,
      name: "Sky Heights",
      city: "Mumbai",
      price: 70000,
      type: "Apartment",
    },
    {
      id: 3,
      name: "Lake View",
      city: "Bangalore",
      price: 45000,
      type: "Apartment",
    },
    {
      id: 4,
      name: "Royal Palace",
      city: "Jaipur",
      price: 80000,
      type: "Villa",
    },
    { id: 5, name: "Urban Nest", city: "Delhi", price: 30000, type: "Flat" },
    { id: 6, name: "Palm Residency", city: "Goa", price: 60000, type: "Villa" },
    { id: 7, name: "City Lights", city: "Mumbai", price: 55000, type: "Flat" },
    { id: 8, name: "Ocean Breeze", city: "Goa", price: 75000, type: "Villa" },
    {
      id: 9,
      name: "Metro Homes",
      city: "Delhi",
      price: 35000,
      type: "Apartment",
    },
    {
      id: 10,
      name: "Sunshine Towers",
      city: "Bangalore",
      price: 40000,
      type: "Flat",
    },
  ];

  const [cityFilter, setCityFilter] = useState("");

  const filteredData = properties.filter((item) => cityFilter === "" || item.city === cityFilter,);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">Property Listings</h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button
          onClick={() => setCityFilter("")}
          className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          All
        </button>

        <button
          onClick={() => setCityFilter("Delhi")}
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Delhi
        </button>

        <button
          onClick={() => setCityFilter("Mumbai")}
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Mumbai
        </button>

        <button
          onClick={() => setCityFilter("Goa")}
          className="px-5 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          Goa
        </button>
      </div>

      {/* Property Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>

            <p className="text-gray-600">City: {item.city}</p>

            <p className="text-gray-600">Type: {item.type}</p>

            <p className="mt-3 text-lg font-bold text-blue-600">
              ₹{item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
