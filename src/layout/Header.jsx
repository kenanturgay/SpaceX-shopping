import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  Twitter,
  User,
  Youtube,
  LogOut,
  ChevronDown,
  UserCircle,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  

  return (
    <header>
      {/* Mobile Navbar */}
      <div className="my-2 flex items-center justify-between bg-white px-4 py-2 md:hidden">
        {/* Company Name */}
        <div className="text-3xl font-bold text-gray-800">t-Wix</div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-gray-800">
            <User />
          </button>

          <button className="text-gray-600 hover:text-gray-800">
            <Search />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <ShoppingCart />
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={toggleMenu}
          >
            <Menu />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center py-4 text-3xl text-fgray sm:hidden`}
      >
        <ul className="mx-auto text-center">
          <li className="my-4">Home</li>
          <li className="my-4">Product</li>
          <li className="my-4">Pricing</li>
            
          <Link to="/contact" className="my-4">Contact</Link>
        </ul>
      </div>
      {/* Desktop Header */}

      <div className="hidden md:block">
        <div className="bg-header_bg_color">
          <div className="container mx-auto flex justify-between px-4 py-4 text-white lg:px-10">
            {/* Contact Info */}
            <div className="hidden gap-6 font-bold md:flex">
              <div className="flex gap-2">
                <Phone color="lightGray" />
                <h6>(212) 234-0118</h6>
              </div>
              <div className="flex gap-2">
                <Mail color="#FAFAFA" />
                <h6>kenan@t-wix.com</h6>
              </div>
            </div>
            {/* Message */}
            <h6 className="hidden xl:block">
              Follow Us and get a chance to win 25% off
            </h6>
            <div className="hidden items-center gap-4 md:flex">
              <h6>Follow Us:</h6>
              <Instagram color="#FAFAFA" />
              <Youtube color="#FAFAFA" />
              <Facebook color="#FAFAFA" />
              <Twitter color="#FAFAFA" />
            </div>
          </div>
        </div>
        {/* Navbar */}
        <div className="container mx-auto">
          <div className="flex items-center justify-between bg-white px-2 py-6 ">
            {/* Logo */}
            <Link to="/" className="text-3xl font-bold text-gray-800">
              T-wix
            </Link>
            {/* Navigation */}
            <nav className="hidden md:block">
              <ul className="flex gap-6 text-h6 font-bold text-fgray">
                <li>Home</li>
                <Link to="/shop">Shop</Link>
                <li>About</li>
                <li>Blog</li>
                <Link to="/contact">Contact</Link>
                <li>Pages</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
