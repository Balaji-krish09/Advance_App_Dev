// Main.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          Yoga Studio
          <div className="flex space-x-4">
            <Link to="/main" className="hover:text-gray-300">Home</Link>
            <Link to="/train" className="hover:text-gray-300">Training Program</Link>
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-gray-100" style={{ backgroundImage: 'url(https://yogashakti.yoga/wp-content/uploads/2019/02/yoga-background-1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="max-w-4xl p-8 bg-white shadow-lg rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-8">Welcome to Yoga Studio</h1>
          <p className="text-lg mb-8">Explore the world of yoga and enhance your physical and mental well-being.</p>
          <Link to="/about" className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300">Learn More</Link>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
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
      </footer>
    </div>
  );
};

export default Main;
