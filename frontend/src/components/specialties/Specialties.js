import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../services/apiSevices";

const Specialties = () => {
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    apiService.getSpecialties().then((data) => setSpecialties(data));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold text-white mb-4">
        Medical Specialties
      </h2>
      {specialties.length === 0 ? (
        <p className="text-gray-500">No specialties found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialties.map((specialty) => (
            <li
              key={specialty.name}
              className="bg-black text-white p-4 rounded-md shadow-md"
            >
              <img
                src={specialty.image}
                alt={specialty.name}
                className="mb-2 rounded-md h-40 sm:h-48 lg:h-56 w-full object-cover"
              />
              <Link
                to={`/doctors/${specialty.name}`}
                className="text-lg font-semibold text-blue-500 hover:underline"
              >
                {specialty.name}
              </Link>
              <p className="text-gray-500">{specialty.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Specialties;
