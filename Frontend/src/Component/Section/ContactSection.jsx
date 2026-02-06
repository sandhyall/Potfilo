import React, { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Contactus = () => {
  const forms = {
    name: "",
    Email: "",
    Message: "",
  };

  const [contact, setContact] = useState(forms);
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const Validation = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name.trim()) errors.name = "Name is required";
    if (!values.Email.trim()) errors.Email = "Email is required";
    else if (!emailRegex.test(values.Email)) errors.Email = "Email is invalid";
    if (!values.Message.trim()) errors.Message = "Message is required";

    return errors;
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = Validation(contact);
    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      console.log("Form submitted successfully:", contact);
      setContact(forms);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000); 
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Get In Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <CiPhone className="text-2xl mt-1" />
              <div>
                <p className="font-medium">Phone Number</p>
                <p className="text-gray-600">+977 9766545136</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MdOutlineEmail className="text-2xl mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">sandhya@gmail.com</p>
              </div>
            </div>
          </div>

         
          <div>
            {submitted && (
              <p className="text-green-500 mb-4 text-center">
                Message sent successfully!
              </p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={contact.name}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 bg-transparent p-2 focus:outline-none focus:border-pink-600 text-lg"
              />
              {error.name && <p className="text-red-500">{error.name}</p>}

              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                value={contact.Email}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 bg-transparent p-2 focus:outline-none focus:border-pink-600 text-lg"
              />
              {error.Email && <p className="text-red-500">{error.Email}</p>}

              <textarea
                name="Message"
                rows="4"
                placeholder="Your Message"
                value={contact.Message}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 bg-transparent p-2 focus:outline-none focus:border-pink-600 text-lg"
              ></textarea>
              {error.Message && <p className="text-red-500">{error.Message}</p>}

              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
