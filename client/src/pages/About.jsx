import React from "react";
import { motion } from "framer-motion";
import {
  UserCircle2,
  Heart,
  Award,
  Users,
  MapPin,
  Coffee,
  Leaf,
  Star,
  Target,
  Eye,
  TrendingUp,
  CheckCircle,
  Clock,
  Globe,
  Handshake,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description:
        "Every cup is crafted with love and premium ingredients sourced directly from tea gardens.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "We believe in building connections and creating spaces where people come together.",
    },
    {
      icon: Leaf,
      title: "Authentic Flavors",
      description:
        "Traditional recipes meets modern innovation to create unforgettable taste experiences.",
    },
    {
      icon: Handshake,
      title: "Trust & Transparency",
      description:
        "Building lasting relationships through honest business practices and consistent quality.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "First Tea Mahal outlet opens in Rajahmundry with a vision to revolutionize tea culture.",
    },
    {
      year: "2022",
      title: "Growing Recognition",
      description:
        "Won 'Best New Tea Brand' award and gained loyal customer base across the region.",
    },
    {
      year: "2023",
      title: "Franchise Launch",
      description:
        "Successfully launched franchise model with first partner stores in major cities.",
    },
    {
      year: "2024",
      title: "Rapid Expansion",
      description:
        "200+ franchise inquiries, 25+ cities covered, and 50,000+ happy customers served.",
    },
  ];

  const teamMembers = [
    {
      name: "Founder & CEO",
      role: "Visionary Leader",
      description:
        "From a small tea stall dream to a growing empire, leading with passion and innovation.",
    },
    {
      name: "Head of Operations",
      role: "Quality Guardian",
      description:
        "Ensures every outlet maintains our high standards and delivers consistent experiences.",
    },
    {
      name: "Franchise Director",
      role: "Growth Catalyst",
      description:
        "Helping entrepreneurs across India join the Tea Mahal family and succeed together.",
    },
  ];

  const achievements = [
    { icon: Award, number: "15+", label: "Awards Won" },
    { icon: Users, number: "50K+", label: "Happy Customers" },
    { icon: MapPin, number: "25+", label: "Cities Covered" },
    { icon: Coffee, number: "1M+", label: "Cups Served" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-orange-600 text-white py-24 px-6"
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
              About Tea Mahal
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              From a single outlet in Rajahmundry to a growing tea movement
              across India – discover the journey where flavor meets tradition
              and dreams brew into reality.
            </p>
            <div className="flex justify-center space-x-4">
              <Coffee className="w-8 h-8 text-yellow-300" />
              <Leaf className="w-8 h-8 text-green-300" />
              <Heart className="w-8 h-8 text-orange-300" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievement Stats */}
      <motion.section
        className="py-16 bg-white shadow-lg -mt-8 relative z-10 mx-4 md:mx-8 rounded-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <achievement.icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <div className="text-4xl font-bold text-green-800 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                Our Story{" "}
                <Coffee className="inline w-10 h-10 ml-2 text-orange-600" />
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Tea Mahal began with a simple yet powerful vision: to serve
                  authentic, hygienic, and affordable tea that resonates with
                  Indian hearts. Our founder, driven by passion and a deep
                  understanding of local tastes, started this journey from the
                  vibrant streets of Rajahmundry.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to
                  consistency, flavor innovation, and creating memorable
                  customer experiences. Every cup tells a story of tradition,
                  quality, and the warmth of Indian hospitality.
                </p>
                <p>
                  Today, with successful franchises across multiple cities and a
                  growing community of tea lovers, Tea Mahal has evolved from a
                  local favorite to a regional phenomenon. We're not just
                  serving tea – we're brewing a revolution, one cup at a time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-200 to-orange-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <Coffee className="w-24 h-24 mx-auto mb-4 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To make Tea Mahal the most loved and trusted tea brand in
                    India, creating opportunities for entrepreneurs while
                    serving happiness in every cup.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Our Core Values
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our tea
              culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <value.icon className="w-12 h-12 text-green-600 mb-6" />
                <h4 className="text-xl font-bold text-green-800 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-r from-green-800 to-orange-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h3>
            <p className="text-xl opacity-90">
              Milestones that shaped our tea revolution
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400 rounded-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                    <div className="text-yellow-300 font-bold text-2xl mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-bold mb-3">
                      {milestone.title}
                    </h4>
                    <p className="opacity-90">{milestone.description}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full border-4 border-white"></div>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Meet Our Leadership
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate minds behind Tea Mahal's success story
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-50 to-orange-50 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-inner mx-auto mb-6">
                  <UserCircle2 className="text-green-700 w-16 h-16" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  {member.name}
                </h4>
                <div className="text-orange-600 font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-br from-orange-50 to-green-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-3xl font-bold text-green-800">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become India's most beloved tea brand, creating a network of
                1000+ outlets by 2030 while empowering local entrepreneurs and
                preserving the rich tradition of Indian tea culture.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-3xl font-bold text-green-800">Our Goals</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Expand to 100+ cities across India</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Create 5000+ employment opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Serve 10 million happy customers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Become the #1 tea franchise in India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Growth Section */}
      <motion.section
        className="py-20 px-6 bg-green-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <TrendingUp className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Growing Fast Across India
            </h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Our flagship outlet in{" "}
              <strong className="text-yellow-300">Rajahmundry</strong> sparked a
              wave of growth that's spreading across Andhra Pradesh and beyond.
              With successful franchises in major cities and hundreds of
              entrepreneurs expressing interest, Tea Mahal is brewing something
              extraordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
              <Globe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Pan-India Presence</h4>
              <p className="opacity-90">
                Expanding rapidly across all major states
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Growing Community</h4>
              <p className="opacity-90">200+ franchise partners and counting</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Award Winning</h4>
              <p className="opacity-90">
                Recognized for excellence and innovation
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-2xl font-semibold mb-6">
              Join a movement that blends business with heart.
              <br />
              <span className="text-yellow-300">
                Be part of the Tea Mahal revolution!
              </span>
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Join Our Journey
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
