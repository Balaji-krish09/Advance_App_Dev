import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const TrainingProgram = () => {
  // Function to handle booking confirmation
  const handleBooking = (programName, cost) => {
    // You can implement your booking confirmation logic here
    console.log(`Booking confirmed for ${programName} at the cost of $${cost}`);
  };

  // Yoga programs data
  const yogaPrograms = [
    {
      name: 'Hatha Yoga',
      benefits: [
        'Improves flexibility and strength',
        'Reduces stress and anxiety',
        'Enhances focus and mental clarity'
      ],
      cost: 50
    },
    {
      name: 'Vinyasa Yoga',
      benefits: [
        'Improves cardiovascular health',
        'Increases flexibility and muscle tone',
        'Boosts energy levels and metabolism'
      ],
      cost: 60
    },
    {
      name: 'Ashtanga Yoga',
      benefits: [
        'Increases strength and flexibility',
        'Improves circulation and detoxifies the body',
        'Calms the mind and reduces stress'
      ],
      cost: 55
    },
    {
      name: 'Kundalini Yoga',
      benefits: [
        'Increases awareness and consciousness',
        'Boosts energy levels and vitality',
        'Reduces stress and anxiety'
      ],
      cost: 65
    },
    {
      name: 'Bikram Yoga',
      benefits: [
        'Detoxifies the body through sweat',
        'Improves flexibility and balance',
        'Promotes weight loss and burns calories'
      ],
      cost: 70
    },
    // Additional yoga programs
    {
      name: 'Yin Yoga',
      benefits: [
        'Targets connective tissues, ligaments, and joints',
        'Reduces stress and anxiety',
        'Increases circulation and flexibility'
      ],
      cost: 55
    },
    {
      name: 'Restorative Yoga',
      benefits: [
        'Relieves physical and mental tension',
        'Promotes relaxation and deep rest',
        'Balances the nervous system'
      ],
      cost: 60
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Yoga Studio</Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/training" className="hover:text-gray-300">Training Program</Link>
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Training Programs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render each yoga program */}
          {yogaPrograms.map((program, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{program.name}</h2>
              <p className="text-gray-700 mb-4">Benefits:</p>
              <ul className="list-disc list-inside mb-4">
                {program.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
              <p className="text-gray-700 mb-4">Cost: ${program.cost} per session</p>
              {/* Book slot button */}
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
                onClick={() => handleBooking(program.name, program.cost)}
              >
                Book Slot
              </button>
            </div>
          ))}
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

export default TrainingProgram;
