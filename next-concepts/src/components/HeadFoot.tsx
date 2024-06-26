"use client";
import React, { useState } from 'react';
import { Menu, X, Home, Info, Mail, Github } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">CryptoBank</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
              <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</a>
              <a href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-[49vh]">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-sm">&copy; 2024 MyApp. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="/" className="text-gray-300 hover:text-white">
              <Home size={20} />
            </a>
            <a href="/about" className="text-gray-300 hover:text-white">
              <Info size={20} />
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white">
              <Mail size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };