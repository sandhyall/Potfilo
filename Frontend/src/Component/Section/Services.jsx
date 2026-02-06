import React from 'react';
import { FaCode, FaLaptopCode,  FaDatabase } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-gray-50 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Services</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-24">
        
       
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 text-center">
          <FaLaptopCode className="text-blue-600 text-5xl mb-5 mx-auto" />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Frontend Development</h3>
          <p className="text-gray-600 text-sm">
            React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design
          </p>
        </div>

        
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 text-center">
          <FaDatabase className="text-green-600 text-5xl mb-5 mx-auto" />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Backend Development</h3>
          <p className="text-gray-600 text-sm">
            Node.js, Express.js, MongoDB, REST APIs, Authentication & Authorization
          </p>
        </div>

      
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 text-center">
          <FaCode className="text-yellow-500 text-5xl mb-5 mx-auto" />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">UI/UX & Design</h3>
          <p className="text-gray-600 text-sm">
            Figma, Adobe XD, Wireframing, Prototyping, User-Friendly Interfaces
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default Services;
