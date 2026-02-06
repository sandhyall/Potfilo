import React from "react";
import Typewriter from "typewriter-effect";
import Photo from "../../assets/photo.jpeg";

const HomeSection = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center bg-gray-50 px-6 md:px-20">
      
      <div className="flex-1 md:max-w-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Hello, it's me
        </h1>
        <p className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-4">
          Sandhya Dahal
        </p>

       
        <div className="text-2xl sm:text-3xl mb-6">
          And I'm{" "}
          <span className="text-blue-600 font-bold inline-block">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "UX/UI Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        <p className="text-gray-600 leading-relaxed mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          inventore aliquam eius est sed totam! Odio corporis ab perspiciatis
          sequi aut quo inventore! Cum velit odit dignissimos sequi molestias
          exercitationem.
        </p>

        <a
          href="/sandhyadahal.pdf"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition"
        >
          Download CV
        </a>
      </div>

 
      <div className="flex-1 mt-10 md:mt-0 flex justify-center items-center">
        <img
          src={Photo}
          alt="Sandhya Dahal"
          className="w-full max-w-sm rounded-2xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default HomeSection;
