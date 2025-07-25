import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow-md sticky z-50 top-0 bg-white/80 backdrop-blur-sm">
            <nav className="border-b border-gray-200 px-4 lg:px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center gap-2">
                        {/* <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-12 hover:scale-105 transition-transform duration-300"
                            alt="Logo"
                        /> */}
                        <span className="text-xl font-bold text-orange-700">REACT_ROUTING</span>
                    </Link>

                    <div className="flex items-center lg:order-2 space-x-2">
                        <Link
                            to="#"
                            className="text-gray-700 hover:text-white hover:bg-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium transition duration-300"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 shadow"
                        >
                            Get Started
                        </Link>
                    </div>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li className="flex justify-center gap-6">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `transition-colors duration-200 ${isActive
                                            ? "text-orange-700 font-semibold"
                                            : "text-gray-700"
                                        } hover:text-orange-600 text-sm`
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `transition-colors duration-200 ${isActive
                                            ? "text-orange-700 font-semibold"
                                            : "text-gray-700"
                                        } hover:text-orange-600 text-sm`
                                    }
                                >
                                    About Us
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `transition-colors duration-200 ${isActive
                                            ? "text-orange-700 font-semibold"
                                            : "text-gray-700"
                                        } hover:text-orange-600 text-sm`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `transition-colors duration-200 ${isActive
                                            ? "text-orange-700 font-semibold"
                                            : "text-gray-700"
                                        } hover:text-orange-600 text-sm`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
