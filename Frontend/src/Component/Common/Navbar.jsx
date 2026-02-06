import React from "react";

const Navbar = () => {
  const linkClass =
    "text-gray-700 hover:text-blue-600 transition font-medium";

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="px-6">
        <nav className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-gray-900">
            Sandhya<span className="text-blue-600">.</span>
          </h1>

          <div className="flex gap-6">
            <a href="#Home" className={linkClass}>Home</a>
            <a href="#about" className={linkClass}>About</a>
            <a href="#services" className={linkClass}>Services</a>
            <a href="#projects" className={linkClass}>Projects</a>
            <a href="#contact" className={linkClass}>Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
