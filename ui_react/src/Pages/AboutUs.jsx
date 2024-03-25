import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Yoga Studio</Link>
          <div>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/signup" className="mr-4">Sign Up</Link>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p className="mb-4">At Yoga Studio, we believe in the transformative power of yoga. Our academy is dedicated to providing a welcoming and inclusive environment for practitioners of all levels.</p>
          <p className="mb-4">With experienced instructors and a variety of classes, we aim to guide our students on their journey towards physical and mental well-being. Whether you're a beginner or an advanced yogi, there's something for everyone at Yoga Studio.</p>
          <p className="mb-4">We prioritize mindfulness, compassion, and self-discovery in our teachings, helping our students cultivate a deeper connection with themselves and the world around them.</p>
          <p className="mb-4">Join us at Yoga Studio and embark on a journey of self-exploration, growth, and healing. Together, let's discover the transformative power of yoga.</p>
          <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300">Contact Us</Link>
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

export default AboutUs;
