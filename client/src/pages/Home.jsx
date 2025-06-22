import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const featuredItems = [
    {
      name: "Masala Chai",
      image:
        "https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg",
      description: "Aromatic blend of spices with classic Indian tea.",
      price: "₹40",
      tag: "Popular",
    },
    {
      name: "Iced Lemon Tea",
      image:
        "https://images.pexels.com/photos/17612825/pexels-photo-17612825.jpeg",
      description: "Cool, tangy, ideal for summer refreshment.",
      price: "₹50",
      tag: "Summer Special",
    },
    {
      name: "Green Tea",
      image:
        "https://images.pexels.com/photos/31986686/pexels-photo-31986686.jpeg",
      description: "Healthy and pure—perfectly brewed green tea.",
      price: "₹45",
      tag: "Healthy",
    },
  ];

  const stats = [
    { number: "50+", label: "Tea Varieties" },
    { number: "1000+", label: "Happy Customers" },
    { number: "25+", label: "Franchise Locations" },
    { number: "5★", label: "Customer Rating" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Styling */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ☕ Premium Tea Experience
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
                    Welcome to
                  </span>
                  <br />
                  <span className="text-amber-600">Tea</span>{" "}
                  <span className="bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
                    Mahall
                  </span>
                </h1>

                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg">
                  Experience the perfect blend of tradition and innovation.
                  Every cup tells a story, every sip creates a memory.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/menu"
                  className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Explore Menu</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>

                <Link
                  to="/about"
                  className="px-8 py-4 border-2 border-emerald-600 text-emerald-700 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:shadow-lg"
                >
                  About Us
                </Link>
              </div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center lg:text-left"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-700">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Image Section */}
            <motion.div
              className="lg:w-1/2 flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-200 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full opacity-40 animate-pulse"></div>

                <div className="relative w-full max-w-[450px] h-[450px] overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <img
                    src="/tea-mahal-shop.png"
                    alt="Tea Mahal Shop"
                    className="w-full h-full object-cover object-[center_25%]"
                  />
                  <div className="absolute bottom-6 left-6 z-20 text-white">
                    <div className="text-sm opacity-90">
                      Experience the Tradition
                    </div>
                    <div className="text-xl font-bold">Tea Mahall</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Menu Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              🍃 Signature Collection
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-emerald-600">Menu</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our carefully curated selection of premium teas, each
              crafted with passion and served with excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Tag */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                  {item.tag}
                </div>

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-emerald-700 font-bold">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-sm">
                          ⭐
                        </span>
                      ))}
                      <span className="text-gray-500 text-sm ml-2">(4.8)</span>
                    </div>
                    <span className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg font-medium text-sm">
                      Must Try
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Full Menu
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Franchise Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium mb-6">
              🚀 Business Opportunity
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-amber-400">Tea</span>{" "}
              <span className="text-white">Mahall</span> Franchise
            </h2>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto leading-relaxed">
              Join India's fastest-growing tea franchise network. Turn your
              entrepreneurial dreams into reality with our proven business model
              and unwavering support.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "💰",
                title: "Low Investment",
                description:
                  "Start your profitable tea business with minimal capital and maximum support from our expert team.",
              },
              {
                icon: "📈",
                title: "High ROI",
                description:
                  "Experience exceptional returns with our proven business model and premium product portfolio.",
              },
              {
                icon: "🤝",
                title: "Full Support",
                description:
                  "From location setup to marketing strategies - we're with you every step of your journey.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-emerald-100 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/franchise"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Franchise Journey
              <span className="ml-2">🚀</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
