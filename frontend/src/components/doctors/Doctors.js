import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiService from '../services/apiSevices'; // Corrected the import statement

const Doctors = () => {
  const { specialty } = useParams();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    apiService.getDoctorsBySpecialty(specialty).then((data) => setDoctors(data));
  }, [specialty]);

  return (
    <div className="container mx-auto mt-8">
      <Link to="/specialties" className="block mb-4 text-blue-500 hover:underline">
        Back to Specialties
      </Link>
      <h2 className="text-3xl font-bold text-white mb-4">Doctors in {specialty}</h2>
      {doctors.length === 0 ? (
        <p className="text-gray-500">No doctors found for this specialty.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <li key={doctor.name} className="bg-black text-white p-4 rounded-md shadow-md">
              <img src={doctor.image} alt={doctor.name} className="mb-2 rounded-md h-40 sm:h-48 lg:h-56 w-full object-cover" />
              <p className="text-lg font-semibold mb-2">{doctor.name}</p>
              <p className="text-gray-500">Specialty: {doctor.specialty}</p>
              <p className="text-gray-500">Experience: {doctor.experience}</p>
              <p className="text-gray-500">Location: {doctor.location}</p>
              <p className="text-gray-500">Fee: {doctor.fee}</p>
              <p className="text-gray-500">Availability: {doctor.availability}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Doctors;
