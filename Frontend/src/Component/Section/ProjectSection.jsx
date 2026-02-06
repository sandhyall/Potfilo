import React from "react";
import Rockpaper from "../../../src/assets/RockPaper.png"
import Ecommerce from "../../../src/assets/Ecommerce.png"

const ProjectSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-24">

        {/* Project 1 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden group">
          
         
          <div className="h-48 bg-gray-200">
          
            <img
              src={Ecommerce}
              alt="Ecommerce Website"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

       
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Ecommerce Website
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              A full-featured ecommerce platform with product filtering,
              cart functionality, authentication, and responsive UI.
            </p>

          
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                React
              </span>
              <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                MongoDB
              </span>
              <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
            </div>

          
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/sandhyall/Ecommer.git"
                className="text-sm font-semibold text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden group">
          
          <div className="h-48 bg-gray-200">
            <img
              src={Rockpaper}
              alt="Rock Paper Scissors"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Rock Paper Scissors Game
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              An interactive browser game with smooth animations,
              score tracking, and responsive gameplay.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                React
              </span>
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                Twlindcss
              </span>
              <span className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
                Nextjs
              </span>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Play Game
              </a>
              <a
                href="https://github.com/sandhyall/rockpaper.git"
                className="text-sm font-semibold text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
