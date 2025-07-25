import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-purple-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-extrabold text-red-600 drop-shadow-md mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 text-center">Oops! Page Not Found</h2>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md transition duration-300"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
