"use client";

import { motion } from "framer-motion";

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-[#F6FBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block border-2 w-fit p-1 px-3 text-sm rounded-xl border-slate-300/80 mb-4 text-black">
            <i className="fas fa-lightbulb mr-2"></i>IMPACT
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">
            Expand Your Competitive Edge
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto font-normal leading-relaxed">
            GingTrip revolutionizes aviation sustainability through innovative technology and data-driven insights
            <br />
            Reduce environmental footprint while improving operational efficiency and regulatory compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Benefit 1: Waste Reduction */}
          <motion.div
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="fas fa-leaf text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Waste Reduction</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Reduce landfill waste through intelligent sorting and recycling, preventing cross-contamination and ensuring effective recycling
            </p>
          </motion.div>

          {/* Benefit 2: Cost Savings */}
          <motion.div
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="fas fa-dollar-sign text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Cost Savings</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Optimize waste management costs through data-driven insights and operational efficiency improvements
            </p>
          </motion.div>

          {/* Benefit 3: Compliance Ready */}
          <motion.div
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="fas fa-shield-alt text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Compliance Ready</h3>
            <p className="text-gray-600 text-center leading-relaxed">
            Seamlessly meet aviation safety standards and environmental regulations that exceed industry requirements
            </p>
          </motion.div>

          {/* Benefit 4: Real-time Insights */}
          <motion.div
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="fas fa-chart-bar text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Real-time Insights</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Make informed decisions with comprehensive analytics and predictive sustainability metrics
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
