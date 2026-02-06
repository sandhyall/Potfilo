import React from "react";
import Photo from "../../assets/photo.jpeg"; 

const AboutSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 py-16 bg-gray-300">
      
      
      <div className="flex-1 flex justify-center md:justify-start items-center mb-10 md:mb-0">
        <div className="relative group">
          <img
            src={Photo}
            alt="Sandhya Dahal"
            className="
              w-56 h-56 sm:w-64 sm:h-64
              rounded-3xl
              shadow-2xl
              object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />
       
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent to-blue-100 opacity-0 group-hover:opacity-30 transition duration-500"></div>
        </div>
      </div>

    
      <div className="flex-1 md:ml-12 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          About Me
        </h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
          I am a skilled and creative UX/UI Designer and detail-oriented Frontend Developer, passionate about crafting user-centered digital experiences. With a proven track record of transforming ideas into intuitive, visually engaging interfaces, I specialize in React to turn complex designs into fast, responsive, and seamless web applications. I am committed to writing clean, optimized code while delivering beautiful, fluid user experiences across all devices. Eager to contribute my creativity, technical expertise, and design skills to a dynamic team and continue growing as a UX/UI professional.
        </p>

        
        <div className="flex justify-center md:justify-start">
          <a
            href="#"
            className="
              inline-block
              bg-gradient-to-r from-blue-600 to-blue-500
              text-white font-semibold
              px-8 py-3
              rounded-xl
              shadow-lg
              hover:from-blue-700 hover:to-blue-600
              hover:shadow-xl
              transition
              duration-300
            "
          >
            Show More
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
