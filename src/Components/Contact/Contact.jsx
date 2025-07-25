import React from 'react';

export default function Contact() {
    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Side - Info */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
                    <p className="text-lg text-gray-600">
                        We'd love to hear from you! Fill out the form and our team will get back to you shortly.
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <div className="flex items-start">
                            <span className="text-orange-600 mt-1">
                                📍
                            </span>
                            <p className="ml-3">North Nazimabad, Karachi, Pakistan</p>
                        </div>
                        <div className="flex items-start">
                            <span className="text-orange-600 mt-1">
                                📞
                            </span>
                            <p className="ml-3">+92 332 3095007</p>
                        </div>
                        <div className="flex items-start">
                            <span className="text-orange-600 mt-1">
                                📧
                            </span>
                            <p className="ml-3">info@razashaikh.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="bg-white shadow-lg rounded-xl p-8">
                    <form className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Enter your number"
                                className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Write your message here..."
                                className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
