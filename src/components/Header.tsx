import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-slate-900 shadow-md mb-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-stone-50">BrandName</div>
        <nav className="flex space-x-4">
          <a href="#" className="text-stone-300 hover:text-gray-50">
            Home
          </a>
          <a href="#" className="text-stone-300 hover:text-gray-50">
            About
          </a>
          <a href="#" className="text-stone-300 hover:text-gray-50">
            Services
          </a>
          <a href="#" className="text-stone-300 hover:text-gray-50">
            Contact
          </a>
        </nav>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
