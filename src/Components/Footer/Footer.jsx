import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-300 py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    {/* <img
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        className="h-14 w-auto hover:scale-105 transition-transform duration-300"
                        alt="Logo"
                    /> */}
                    <span className="text-xl font-bold text-orange-700">REACT_ROUTING</span>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-gray-900 font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-orange-600 transition">Home</Link>
                        </li>
                        <li>
                            <a href="https://github.com/razashaikh99" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition">Github</a>
                        </li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-gray-900 font-semibold mb-3">Follow us</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about" className="hover:text-orange-600 transition">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-orange-600 transition">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-gray-900 font-semibold mb-3">Legal</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="#" className="hover:text-orange-600 transition">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-orange-600 transition">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-500 text-sm">
                © 2025 <Link to="https://github.com/razashaikh99" target="_blank" className="text-orange-600 hover:underline">@razashaikh99</Link>. All Rights Reserved.
            </div>
        </footer>
    );
}
