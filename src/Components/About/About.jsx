import React from 'react';

export default function About() {
    return (
        <section className="bg-gray-50 py-30 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Image */}
                <div className="w-full">
                    <img
                        src="https://i0.wp.com/www.nico.ar/wp-content/uploads/2022/09/lottiefiles.png?fit=1024%2C768&ssl=1"
                        alt="About Us"
                        className="rounded-xl shadow-xl w-full object-cover"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                        Crafting Exceptional React Experiences
                    </h2>

                    <p className="text-gray-600 text-lg">
                        At our core, we are a team of passionate developers dedicated to building scalable and elegant React applications. Our mission is to turn your ideas into reality with clean, reusable, and maintainable code.
                    </p>

                    <p className="text-gray-600 text-lg">
                        With years of experience and a deep understanding of modern frontend technologies, we ensure every project we undertake is a reflection of our commitment to performance and user experience.
                    </p>

                    <a
                        href="#contact"
                        className="inline-block bg-orange-600 text-white px-6 py-3 mt-4 rounded-md font-medium hover:bg-orange-700 transition duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
