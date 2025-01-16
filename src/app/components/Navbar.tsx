'use client'

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faFileAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-lg font-bold">
                            Portfolio
                        </Link>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Link href="/" className="hover:text-gray-300 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
                            <span>Home</span>
                        </Link>
                        <Link href="/portfolio" className="hover:text-gray-300 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faBriefcase} className="h-5 w-5" />
                            <span>Portfolio</span>
                        </Link>
                        <Link href="/cv" className="hover:text-gray-300 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faFileAlt} className="h-5 w-5" />
                            <span>CV & Transcript</span>
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
                        <span>Tel 062-212-7689</span>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
