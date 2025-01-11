import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logo from '../../assets/images/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='iconstop '>
      <div className="fixed top-0 left-0 w-full bg-blue-500 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex text-white justify-between items-center">
          <div className="text-xs sm:text-xsm">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" size="sm"  />
            <Link href="tel:+91-8619082889"> +91-8619082889</Link>
          </div>
          <div className="flex items-center space-x-4 ">
          <div className="text-xs sm:text-xsm text-gray-900 text-white">
  <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-white"  size="sm"  />
  <Link href="mailto:support@zanithpay.com" className="email-text text-white">
    support@zanithpay.com
  </Link>
</div>

            <div className="flex space-x-4 socialicon">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500  text-xs sm:text-sm">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500  text-xs sm:text-sm">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500  text-xs sm:text-sm">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <header className="fixed top-10 left-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
          <div className="logotop py-2">
            <Image src={logo} alt="Logo" width={300} height={100}/>
          </div>
          <div className="md:hidden ticon">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
          <nav className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white md:static md:bg-transparent md:w-auto`}>
            <Link href="/" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
              <strong>Home</strong>
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
              <strong>About</strong>
            </Link>
            <Link href="/services" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
              <strong>Services</strong>
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
              <strong>Contact</strong>
            </Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
                <strong>Login</strong>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 w-40 bg-white shadow-lg z-10">
                  <Link href="http://users.zanithpay.com/login" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
                    User Login
                  </Link>
                  <Link href="https://retailor.zanithpay.com/login/" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
                  Retailor Login
                  </Link>
                  <Link href="http://admin.zanithpay.com/" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
                    Team Login
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
