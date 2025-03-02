"use client";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Work Manager Website</h1>
        <p className="text-lg">Delivering excellence with every project</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-semibold text-center mb-10">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Add Task', 'Show Task', 'Del Task'].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3">{feature}</h3>
              <p className="text-gray-700">Explore and lessen your burden of remembering every task daily</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-800 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to take your business to the next level?</h2>
        <button className="mt-6 bg-blue-600 px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}
