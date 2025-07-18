"use client";

import Image from "next/image";
import Logo from "@/public/logo-gingtrip.png";
import { FaBars } from "react-icons/fa";
import Button from "./Button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 80; // Offset for header
      
      // Use requestAnimationFrame for smooth animation
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        
        // Easing function for smooth animation (ease-out)
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        window.scrollTo(0, startPosition + distance * easeOutCubic);
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className={`flex justify-between items-center px-6 py-4 backdrop-blur-md fixed top-0 w-full z-50 transition-all duration-300 shadow-md ${isScrolled ? 'bg-white/90' : 'bg-white/20'}`}>
      <div 
        className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
        onClick={() => smoothScrollTo('hero')}
      >
        <Image src={Logo} alt="GingTrip Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-[#2E4138]">GingTrip</span>
      </div>
      <FaBars 
        className="block md:hidden cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-300" 
        onClick={toggleMobileMenu}
      />
      
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 items-center">
          <li>
            <a href="#product" className="text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={(e) => handleNavClick(e, 'product')}>Product</a>
          </li>
          <li>
            <a href="#impact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={(e) => handleNavClick(e, 'impact')}>Impact</a>
          </li>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
            <Button text="Contact Us" />
          </a>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className={`absolute top-full left-0 w-full backdrop-blur-md shadow-lg md:hidden ${isScrolled ? 'bg-white/90' : 'bg-white/20'}`}>
          <ul className="flex flex-col py-4">
            <li className="px-6 py-3 border-b border-gray-200">
              <a href="#product" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 block" onClick={(e) => handleNavClick(e, 'product')}>Product</a>
            </li>
            <li className="px-6 py-3 border-b border-gray-200">
              <a href="#impact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 block" onClick={(e) => handleNavClick(e, 'impact')}>Impact</a>
            </li>
            <li className="px-6 py-3">
              <a href="#contact" className="block" onClick={(e) => handleNavClick(e, 'contact')}>
                <Button text="Contact Us" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
