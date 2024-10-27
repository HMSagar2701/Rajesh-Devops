"use client"; // Ensure this directive is present for client components

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the hamburger menu

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // State to handle the mobile menu toggle

    const toggleMenu = () => setIsOpen(!isOpen); // Toggle menu function

    return (
        <header className="w-full fixed top-0 left-0 z-10 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <Link href="/" className="font-bold text-2xl text-white hover:text-gray-200 transition" aria-label="Home">
                    Logo
                </Link>
                
                <div className="hidden md:flex space-x-6 text-lg">
                    <Link href="/courses" className="hover:underline text-white hover:text-gray-200 transition duration-300" aria-label="Courses">
                        Courses
                    </Link>
                    <Link href="/social" className="hover:underline text-white hover:text-gray-200 transition duration-300" aria-label="Social">
                        Social
                    </Link>
                    <Link href="/about" className="hover:underline text-white hover:text-gray-200 transition duration-300" aria-label="About">
                        About
                    </Link>
                    <Link href="/testimony" className="hover:underline text-white hover:text-gray-200 transition duration-300" aria-label="Testimony">
                        Testimony
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 space-y-4">
                    <Link href="/courses" className="block hover:underline" aria-label="Courses">
                        Courses
                    </Link>
                    <Link href="/social" className="block hover:underline" aria-label="Social">
                        Social
                    </Link>
                    <Link href="/about" className="block hover:underline" aria-label="About">
                        About
                    </Link>
                    <Link href="/testimony" className="block hover:underline" aria-label="Testimony">
                        Testimony
                    </Link>
                </div>
            )}
        </header>
    );
}
