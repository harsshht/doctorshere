import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <FontAwesomeIcon icon={faStethoscope} className="text-4xl sm:text-6xl mb-4" />
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Welcome to Doctor Directory</h1>
        <p className="text-sm sm:text-lg mb-8">
          Explore medical specialties and find the right doctor for you.
        </p>
        <Link
          to="/specialties"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
