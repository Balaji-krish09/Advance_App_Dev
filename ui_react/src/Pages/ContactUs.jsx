import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Yoga Studio</Link>
          <div>
            {/* Links can be added here if needed */}
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-sm p-8 bg-white shadow-lg rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your email address" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your feedback"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            {/* Social Media Icons */}
            <a href="#" className="text-xl text-white mr-4"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-xl text-white mr-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-xl text-white"><i className="fab fa-instagram"></i></a>
          </div>
          
        </div>
        <p className="text-center text-gray-300">Feel free to contact us, we will reply to you within 2 hours.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
