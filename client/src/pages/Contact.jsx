import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
  Leaf,
  AlertCircle,
} from "lucide-react";
import API from "../api"; // Import your API instance

const Contact = () => {
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
      console.log("Submitting contact form data:", formData);

      // Use the same API endpoint as franchise or create a new one for contact
      const res = await API.post("/api/franchise", formData);

      console.log("API Response:", res.data);

      if (res.data.success === false) {
        throw new Error(res.data.message || "Submission failed");
      }

      if (res.data.emailIssue) {
        setError(
          "Your message was saved, but we couldn't send a confirmation email. Please double-check your email."
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Decorative tea steam animation */}
      <div className="absolute top-10 left-10 opacity-20">
        <motion.div
          animate={{ y: [-20, -60, -20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl"
        >
          ☕
        </motion.div>
      </div>

      <div className="absolute top-20 right-20 opacity-20">
        <motion.div
          animate={{ y: [-30, -70, -30] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="text-4xl"
        >
          🫖
        </motion.div>
      </div>

      <motion.section
        className="relative py-20 px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Leaf className="text-green-600 w-8 h-8" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Join the Tea Mahall Family
              </h1>
              <Leaf className="text-green-600 w-8 h-8 scale-x-[-1]" />
            </motion.div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Brew your entrepreneurial dreams with us. Every great franchise
              starts with a conversation over tea.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact Info & Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Details Card */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-amber-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-full">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Let's Chat!
                    </h3>
                    <p className="text-gray-600">We're always brewing</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <Phone className="text-green-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">
                        +91 98765 43210
                      </span>
                      <p className="text-sm text-gray-600">
                        Call us for a warm conversation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <Mail className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">
                        info@teamahal.in
                      </span>
                      <p className="text-sm text-gray-600">
                        Drop us a line anytime
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <MapPin className="text-purple-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">
                        Rajahmundry, Andhra Pradesh
                      </span>
                      <p className="text-sm text-gray-600">
                        Where our tea story began
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl">
                    <Clock className="text-amber-600 w-5 h-5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">
                        Mon - Sat: 9 AM - 8 PM
                      </span>
                      <p className="text-sm text-gray-600">
                        Tea time is anytime!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Card */}
              <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-3xl shadow-xl border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="text-red-500 w-7 h-7" />
                  <h4 className="text-2xl font-bold text-gray-800">
                    Why Partner With Us?
                  </h4>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    🌱 <strong>Growing Together:</strong> We're not just another
                    tea chain - we're a family of passionate tea lovers building
                    something special.
                  </p>
                  <p className="leading-relaxed">
                    🤝 <strong>Personal Touch:</strong> As a growing franchise,
                    you'll work directly with our founders and get personalized
                    support.
                  </p>
                  <p className="leading-relaxed">
                    ☕ <strong>Quality First:</strong> Every cup tells a story
                    of authentic flavors and traditional brewing methods.
                  </p>
                  <p className="leading-relaxed">
                    💡 <strong>Innovation Welcome:</strong> Your ideas matter!
                    Help us shape the future of Tea Mahall.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-amber-200">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🍵</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-2">
                    Start Your Tea Journey
                  </h3>
                  <p className="text-gray-600">
                    Fill out this form and let's brew success together!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-200 focus:border-amber-400 transition-all bg-white/70 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-200 focus:border-amber-400 transition-all bg-white/70 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      maxLength="10"
                      pattern="[6-9]{1}[0-9]{9}"
                      placeholder="Phone Number (10 digits)"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/^\d*$/.test(val)) {
                          setFormData({ ...formData, phone: val });
                        }
                      }}
                      className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-200 focus:border-amber-400 transition-all bg-white/70 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="location"
                      placeholder="Your City / Preferred Location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-200 focus:border-amber-400 transition-all bg-white/70 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Tell us about your interest in Tea Mahall franchise... What draws you to the tea business?"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-200 focus:border-amber-400 transition-all bg-white/70 backdrop-blur-sm text-gray-800 placeholder-gray-500 resize-none"
                    ></textarea>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-100 border border-red-400 rounded-2xl p-4 flex items-center space-x-2"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-red-800">{error}</p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600"
                    } text-white`}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Brewing Your Request...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>🚀</span>
                        Start My Tea Adventure
                      </div>
                    )}
                  </motion.button>

                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 p-6 rounded-2xl text-center"
                    >
                      <div className="text-4xl mb-2">🎉</div>
                      <p className="text-green-800 font-semibold text-lg mb-1">
                        Welcome to the Tea Mahall Family!
                      </p>
                      <p className="text-green-700">
                        We'll reach out within 24 hours to discuss your
                        franchise opportunity. Time for tea! ☕
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-8 rounded-3xl text-white shadow-2xl max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">
                Ready to Brew Your Success Story?
              </h4>
              <p className="text-lg opacity-90 mb-6">
                Join the growing Tea Mahall family and be part of India's most
                authentic tea experience. Together, we'll serve happiness, one
                cup at a time.
              </p>
              <div className="flex justify-center gap-8 text-sm opacity-75">
                <span>✨ Authentic Recipes</span>
                <span>🤝 Personal Support</span>
                <span>📈 Growing Brand</span>
                <span>❤️ Tea Passion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
