"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const Product = () => {
  const sectionRef = useRef(null);

  return (
    <section
      id="product"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block border-2 w-fit p-1 px-3 text-sm rounded-xl border-slate-300/80 mb-4">
            <i className="fas fa-plane mr-2"></i>PRODUCT
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">
            Revolutionise Aviation Sustainability
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 sm:mb-8 max-w-4xl mx-auto font-normal leading-relaxed">
            Discover our integrated suite of sustainability solutions designed for modern aviation operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* In-Flight Recycling */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-500 hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-20 h-20 bg-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="fas fa-recycle text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">In-Flight Recycling</h3>
            <p className="text-gray-600 leading-relaxed text-center mb-6">
              Waste sorting and recycling infrastructure that maximize resource recovery during flights, reducing landfill waste through material separation and processing.
            </p>
          </motion.div>
          
          {/* Data-Driven Management */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-500 hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-20 h-20 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="fas fa-chart-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Data-Driven Management</h3>
            <p className="text-gray-600 leading-relaxed text-center mb-6">
              Analytics platform providing actionable insights into waste patterns, operational efficiency, and sustainability metrics to optimize your management strategy.
            </p>
          </motion.div>
          
          {/* ESG Reporting */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-500 hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="fas fa-file-alt text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">ESG Reporting</h3>
            <p className="text-gray-600 leading-relaxed text-center mb-6">
              Automate ESG reporting workflows that meets international standards and regulatory requirements while enhancing stakeholder transparency
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Product;
