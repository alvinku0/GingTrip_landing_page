"use client";

import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import Button from "./Button";
import Star from "@/public/emojistar 1.png";
import Helix from "@/public/helix2 1.png";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CTA = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="flex flex-col items-center pt-12 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-8 md:px-14 bg-white overflow-x-clip"
    >
      <div className="max-w-[570px] flex flex-col items-center relative">
        <motion.img
          src={Star.src}
          alt="Star"
          className="absolute -left-[345px] -top-28 pr-6 hidden md:block"
          style={{
            translateY: translateY,
            filter: "hue-rotate(270deg) brightness(0.8) saturate(1.2) contrast(1.1)",
          }}
        />
        <motion.img
          src={Helix.src}
          alt="Helix"
          className="absolute -right-96 -top-6 hidden md:block"
          style={{
            translateY: translateY,
            filter: "hue-rotate(270deg) brightness(0.8) saturate(1.2) contrast(1.3)",
          }}
        />
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-4 sm:py-6 font-bold tracking-tighter text-center text-black">
          Ready to Transform Your Airline?
        </div>

        <div className="text-center text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
          Reach out to us to explore how GingTrip can empower your Airline. Whether you have inquiries or are ready to get started, we are here to support you every step of the way
        </div>

        <div className="flex items-center justify-center mt-4 text-lg">
          <div className="flex items-center gap-2 font-semibold text-green-800">
            <FaEnvelope className="h-4 w-4" />
            <span>Email: </span>
            <a href="mailto:inquiry@gingtrip.com" className="hover:underline">
              inquiry@gingtrip.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
