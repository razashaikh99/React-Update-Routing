import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const { userid } = useParams();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 to-yellow-500">
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    👤 User Profile
                </h1>
                <p className="text-xl text-orange-600 font-semibold">
                    User ID: <span className="text-gray-700">{userid}</span>
                </p>
            </div>
        </div>
    );
}
