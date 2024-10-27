"use client"; // Ensure this directive is present for client components

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Subscribed: ${email}`);
        setEmail(""); // Reset email field after submission
    };

    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
                    
                    {/* Navigation Links */}
                    <div className="flex-1">
                        <h5 className="text-lg font-semibold text-gray-100 mb-3">Navigation</h5>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-gray-400 transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-gray-400 transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-gray-400 transition">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-gray-400 transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex-1">
                        <h5 className="text-lg font-semibold text-gray-100 mb-3">Follow Us</h5>
                        <div className="flex space-x-4">
                            <Link href="https://www.facebook.com" target="_blank" className="hover:text-gray-400 transition">
                                <FaFacebook size={20} />
                            </Link>
                            <Link href="https://www.twitter.com" target="_blank" className="hover:text-gray-400 transition">
                                <FaTwitter size={20} />
                            </Link>
                            <Link href="https://www.instagram.com" target="_blank" className="hover:text-gray-400 transition">
                                <FaInstagram size={20} />
                            </Link>
                            <Link href="https://www.linkedin.com" target="_blank" className="hover:text-gray-400 transition">
                                <FaLinkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Subscription Form */}
                    <div className="flex-1 w-full md:w-1/3">
                        <h5 className="text-lg font-semibold text-gray-100 mb-3">Subscribe to Our Newsletter</h5>
                        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-grow py-2 px-3 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 mb-2 md:mb-0 md:mr-2"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
