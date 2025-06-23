import React, { useState } from "react";
import API from "../api";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Award,
  Coffee,
  DollarSign,
  Building,
  Clock,
  Heart,
  Shield,
  Zap,
  AlertCircle,
} from "lucide-react";

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    // Reset error
    setError("");

    // Basic validation
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }

    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (!formData.phone.trim()) {
      setError("Phone number is required");
      return false;
    }

    // Phone number validation
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(formData.phone)) {
      setError("Please enter a valid 10-digit Indian phone number");
      return false;
    }

    if (!formData.location.trim()) {
      setError("Location is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      console.log("Submitting form data:", formData);

      const res = await API.post("/api/franchise", formData);

      console.log("API Response:", res.data);

      if (res.data.success === false) {
        throw new Error(res.data.message || "Submission failed");
      }

      if (res.data.emailIssue) {
        setError(
          "Your request was saved, but we couldn't send a confirmation email. Please double-check your email."
        );
      } else {
        setSuccess(true);
      }

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);

      // Handle different types of errors
      if (error?.response?.status === 500) {
        setError(
          "Server error occurred. Please try again later or contact support."
        );
      } else if (error?.response?.status === 400) {
        setError(
          error?.response?.data?.message ||
            "Invalid form data. Please check your inputs."
        );
      } else if (error?.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error?.message) {
        setError(error.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { icon: Building, number: "200+", label: "Franchise Partners" },
    { icon: Users, number: "50K+", label: "Happy Customers" },
    { icon: MapPin, number: "25+", label: "Cities Covered" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" },
  ];

  const benefits = [
    {
      icon: Coffee,
      title: "Signature Tea Blends",
      desc: "Access to our exclusive tea recipes and premium ingredients sourced directly from tea gardens across India.",
    },
    {
      icon: DollarSign,
      title: "High Profit Margins",
      desc: "Proven business model with 60-70% profit margins and quick ROI within 12-18 months.",
    },
    {
      icon: Shield,
      title: "Complete Brand Support",
      desc: "End-to-end support including setup, training, marketing, and ongoing operational guidance.",
    },
    {
      icon: Zap,
      title: "Quick Setup Process",
      desc: "Get your outlet running in just 30 days with our streamlined setup and training process.",
    },
    {
      icon: Award,
      title: "Award-Winning Brand",
      desc: "Join India's fastest-growing tea chain recognized for quality and customer satisfaction.",
    },
    {
      icon: Heart,
      title: "Community Impact",
      desc: "Be part of a brand that supports local tea farmers and promotes sustainable practices.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      text: "Best decision I made! My Tea Mahal outlet generates ₹3L+ monthly revenue.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      text: "The support team is amazing. They helped me every step of the way.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      location: "Pune",
      text: "Customers love our authentic tea flavors. Business is booming!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-orange-600 text-white py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Tea Mahal
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              Become a Franchise Partner
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Join India's most beloved tea chain and brew success in your city
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-white shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <div className="text-4xl font-bold text-green-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Why Choose Tea Mahal?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to build a successful tea business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <benefit.icon className="w-12 h-12 text-green-600 mb-6" />
                <h4 className="text-xl font-bold text-green-800 mb-4">
                  {benefit.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Investment Details */}
      <motion.section
        className="py-20 bg-gradient-to-r from-green-800 to-orange-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Investment Details
            </h3>
            <p className="text-xl opacity-90">
              Transparent pricing with no hidden costs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h4 className="text-2xl font-bold mb-4">Small City</h4>
              <div className="text-4xl font-bold mb-4 text-yellow-300">
                ₹2-3 Lakhs
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>150-300 sq ft space</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Basic equipment setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Initial inventory</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl border border-white/30 transform scale-105">
              <div className="text-center mb-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Metro City</h4>
              <div className="text-4xl font-bold mb-4 text-yellow-300">
                ₹3-4 Lakhs
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>300-500 sq ft space</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Premium equipment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Extended menu options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h4 className="text-2xl font-bold mb-4">Premium Location</h4>
              <div className="text-4xl font-bold mb-4 text-yellow-300">
                ₹4-5 Lakhs
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>500+ sq ft space</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Luxury interior design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Full menu portfolio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Success Stories
            </h3>
            <p className="text-xl text-gray-600">
              Hear from our successful franchise partners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-50 to-orange-50 p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-green-800">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Application Form */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-br from-orange-50 to-green-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Start Your Tea Mahal Journey
            </h3>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[6-9]{1}[0-9]{9}"
                    maxLength="10"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d*$/.test(val)) {
                        setFormData({ ...formData, phone: val });
                      }
                    }}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Preferred Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    placeholder="City where you want to open"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Message / Interest
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                  placeholder="Tell us about your business experience and why you're interested in Tea Mahal..."
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border border-red-400 rounded-xl p-4 flex items-center space-x-2"
                >
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800">{error}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 hover:shadow-2xl transform hover:scale-105"
                } text-white`}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Submit Application"
                )}
              </button>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 rounded-xl p-4 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-green-800 font-bold">
                    Application submitted successfully!
                  </p>
                  <p className="text-green-700">
                    Our team will contact you within 24 hours.
                  </p>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-16 bg-green-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Ready to Get Started?</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6 text-yellow-400" />
              <span className="text-xl">+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-6 h-6 text-yellow-400" />
              <span className="text-xl">franchise@teamahal.com</span>
            </div>
          </div>
          <p className="mt-6 text-lg opacity-90">
            Join the Tea Mahal family and brew success in your city!
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Franchise;
