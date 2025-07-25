import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <aside className="relative overflow-hidden rounded-lg sm:mx-24 mx-4 my-10 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100 shadow-xl">
                <div className="relative z-10 max-w-screen-xl px-4 py-20 sm:py-28 mx-auto flex flex-col-reverse sm:flex-row items-center justify-between">
                    {/* Text */}
                    <div className="text-center sm:text-left space-y-6 max-w-xl">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
                            Discover the Perfect App
                            <span className="block text-orange-600 mt-2">Download Now</span>
                        </h2>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 px-6 py-3 text-white bg-orange-700 hover:bg-orange-800 rounded-lg shadow-lg transition duration-300"
                        >
                            <svg
                                fill="white"
                                width="22"
                                height="22"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download now
                        </Link>
                    </div>

                    {/* Hero Image */}
                    <div className="mb-10 sm:mb-0">
                        <img
                            className="w-64 sm:w-80"
                            src="https://cdn.dribbble.com/userupload/27435546/file/original-d6d21e1c4966b81b9f3f98dadaa1c906.gif"
                            alt="Hero"
                        />
                    </div>
                </div>
            </aside>

            {/* App Highlight Section (Replaces Middle Showcase + Heading) */}
            <section className="grid sm:grid-cols-2 gap-12 items-center ml-20 my-20 sm:my-32 mx-auto px-6 sm:px-12 lg:px-20">
                {/* Text Content */}
                <div className="space-y-6">
                    <h2 className="text-4xl sm:text-5xl font-bold text-orange-700">
                        The Smarter Way to Manage
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Discover a seamless experience with our feature-rich app designed to boost your productivity, simplify your tasks, and secure your data like never before.
                    </p>
                    <ul className="space-y-3 text-gray-700 font-medium">
                        <li className="flex items-center gap-3">
                            ✅ Easy-to-use Interface
                        </li>
                        <li className="flex items-center gap-3">
                            ✅ Fast & Reliable Performance
                        </li>
                        <li className="flex items-center gap-3">
                            ✅ 24/7 Support & Updates
                        </li>
                    </ul>
                    <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition font-semibold">
                        Get Started Now
                    </button>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <img
                        className="rounded-xl shadow-lg sm:w-120"
                        src="https://cdn.dribbble.com/userupload/27435546/file/original-d6d21e1c4966b81b9f3f98dadaa1c906.gif"
                        alt="App Preview"
                    />
                </div>
            </section>


            {/* Features */}
            <section className="py-16 px-6 bg-white">
                <h2 className="text-center text-3xl sm:text-4xl font-bold text-orange-700 mb-14">
                    Why Choose Us?
                </h2>
                <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {["Fast Performance", "User Friendly", "Secure Platform"].map((feature, index) => (
                        <div
                            key={index}
                            className="bg-orange-50 hover:bg-orange-100 transition duration-300 p-6 rounded-xl shadow-md border border-orange-200"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                                blanditiis magni possimus nisi.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-yellow-50">
                <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-14">
                    What Users Say
                </h2>
                <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {[
                        {
                            text: "This app changed the way I work!",
                            name: "Ayesha Khan",
                        },
                        {
                            text: "Absolutely smooth and fast. Highly recommend!",
                            name: "Ahmed Ali",
                        },
                    ].map((testimonial, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow-md text-center border border-orange-100"
                        >
                            <p className="text-gray-700 italic text-base">"{testimonial.text}"</p>
                            <h4 className="mt-4 font-bold text-orange-600 text-sm">– {testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
