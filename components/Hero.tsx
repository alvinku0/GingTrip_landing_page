"use client";

import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import Button from "./Button";
import Visual from "@/public/Visual.png";
import Cylinder from "@/public/cylinder.png";
import HalfTorus from "@/public/half-torus.png";
import CubeHelix from "@/public/cube-helix.png";
import Pyramid from "@/public/pyramid.png";
import Tube from "@/public/tube.png";
import Helix2 from "@/public/helix2 1.png";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Smooth scroll function using Framer Motion
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
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-background relative w-full h-screen flex items-center justify-center overflow-x-clip"
    > 
      <div className="relative w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col text-center max-w-8xl mx-auto">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            {/* Decorative objects with responsive opacity */}
            <motion.img
              src={Pyramid.src}
              alt="Pyramid"
              className="hidden md:block absolute z-10 opacity-50
                         md:left-10 lg:left-20 xl:left-40
                         md:-bottom-8 lg:-bottom-16 xl:-bottom-20
                         md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-64 xl:h-64"
              style={{
                translateY: translateY,
                filter: "hue-rotate(270deg) brightness(0.8) saturate(1)",
              }}
            />
            <motion.img
              src={Tube.src}
              alt="Tube"
              className="absolute z-10 
                         opacity-30 md:opacity-50
                         -left-16 -top-20
                         sm:-left-12 sm:-top-20
                         md:left-12 md:-top-20
                         lg:left-32 lg:-top-24 
                         xl:left-48 xl:-top-32
                         w-48 h-48 lg:w-36 lg:h-36 xl:w-48 xl:h-48"
              style={{
                translateY: translateY,
                rotate: 300,
                filter: "hue-rotate(270deg) brightness(0.9) contrast(1.1)",
              }}
            />
            <motion.img
              src={Visual.src}
              alt="Visual"
              className="absolute z-10 
                         opacity-30 md:opacity-50
                         -right-24 -bottom-48 translate-x-1/3
                         sm:-right-12 sm:-bottom-32
                         lg:right-16 lg:-bottom-32 
                         xl:right-32 xl:-bottom-48
                         w-72 h-72 xl:w-96 xl:h-96"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              style={{
                filter: "hue-rotate(270deg) brightness(0.7) saturate(1.3)",
              }}
            />
            {/* Title Text */}
            <h1 className="font-bold leading-tight mb-4 sm:mb-6 relative z-20">
              <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                Supercharge Aviation <br className="md:hidden" />Sustainability With
              </span>
              <div className="word-carousel-wrapper text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5rem]">
                {/* This invisible placeholder sets the width for the container */}
                <span className="placeholder">Quantitative ESG Reporting</span>
                {/* This container holds the animated words */}
                <div className="word-carousel">
                  <div className="carousel-face gradient-text">In-Flight Recycling</div>
                  <div className="carousel-face gradient-text">Data-Driven Management</div>
                  <div className="carousel-face gradient-text">Quantitative ESG Reporting</div>
                  <div className="carousel-face gradient-text">Smart Waste Management</div>
                </div>
              </div>
            </h1>
            
            {/* Buttons */}
            <div className="mt-8 sm:mt-12 md:mt-16 flex flex-row items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
              <a href="#product" onClick={(e) => handleNavClick(e, 'product')}>
                <Button text="Explore Solutions" />
              </a>
              <a href="#contact" className="cursor-pointer hover:underline whitespace-nowrap" onClick={(e) => handleNavClick(e, 'contact')}>
                Contact Us
                <FaArrowRight className="h-3 w-3 inline ml-1 sm:ml-2" />
              </a>
            </div>
            
            {/* Scroll Indicator */}
            <a 
              href="#product" 
              className="absolute left-1/2 -bottom-16 sm:-bottom-20 md:-bottom-24 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={(e) => handleNavClick(e, 'product')}
            >
              <div className="flex flex-col items-center space-y-1">
                <FaChevronDown className="text-green-800 text-base sm:text-lg hover:text-green-900 transition-colors" />
                <FaChevronDown className="text-green-700 text-xs sm:text-sm hover:text-green-800 transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
