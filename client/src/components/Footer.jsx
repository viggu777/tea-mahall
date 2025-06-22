import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-amber-900 via-red-900 to-orange-900 text-white overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-28 h-28 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full blur-3xl"></div>
      </div>

      {/* Tea Leaf Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="absolute top-10 left-10 w-16 h-16 transform rotate-12"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,15.5C2,15.5 2,16.5 3,16.5C4,16.5 4,16 4,15C4,13 5,12 6,12C7,12 8,13 8,14C8,15 7,16 6,16C5,16 5,15 5,15C5,15 5,14 6,14C6,14 6,14 6,14C6,14 6,14.5 6.5,14.5C7,14.5 7.5,14 7.5,13.5C7.5,13 7,12.5 6.5,12.5C6,12.5 5.5,13 5.5,13.5C5.5,14 6,14.5 6.5,14.5" />
        </svg>
        <svg
          className="absolute bottom-20 right-20 w-12 h-12 transform -rotate-45"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,15.5C2,15.5 2,16.5 3,16.5C4,16.5 4,16 4,15C4,13 5,12 6,12C7,12 8,13 8,14C8,15 7,16 6,16C5,16 5,15 5,15C5,15 5,14 6,14C6,14 6,14 6,14C6,14 6,14.5 6.5,14.5C7,14.5 7.5,14 7.5,13.5C7.5,13 7,12.5 6.5,12.5C6,12.5 5.5,13 5.5,13.5C5.5,14 6,14.5 6.5,14.5" />
        </svg>
      </div>

      <div className="relative z-10 pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo + Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <img
                    src="/tea-mahal-logo.png"
                    alt="Tea Mahall Logo"
                    className="h-20 object-contain mb-4 filter drop-shadow-lg"
                  />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Tea Mahall
                  </h2>
                  <p className="text-amber-100 text-sm mt-2 leading-relaxed">
                    Brewing authentic flavors since inception. Experience the
                    perfect blend of tradition and taste.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-yellow-300 border-b-2 border-yellow-400/30 pb-2 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <FaMapMarkerAlt className="text-yellow-400 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-amber-100 text-sm leading-relaxed">
                      Tea Mahall Headquarters
                      <br />
                      12-34, Main Road, Srikakulam
                      <br />
                      Andhra Pradesh, India – 532001
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <FaEnvelope className="text-yellow-400 group-hover:scale-110 transition-transform" />
                  <a
                    href="mailto:info@teamahall.com"
                    className="text-green-300 hover:text-green-200 text-sm hover:underline transition-colors"
                  >
                    info@teamahall.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 group">
                  <FaPhone className="text-yellow-400 group-hover:scale-110 transition-transform" />
                  <a
                    href="tel:+919876543210"
                    className="text-green-300 hover:text-green-200 text-sm hover:underline transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-yellow-300 border-b-2 border-yellow-400/30 pb-2 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/menu", label: "Our Menu" },
                  { to: "/about", label: "About Us" },
                  { to: "/contact", label: "Contact" },
                  { to: "/locations", label: "Find Us" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-amber-100 hover:text-yellow-300 text-sm transition-all duration-300 hover:translate-x-2 inline-block group"
                    >
                      <span className="border-b border-transparent group-hover:border-yellow-300 transition-all duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Franchise + Social */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-yellow-300 border-b-2 border-yellow-400/30 pb-2 mb-6">
                Join Our Family
              </h3>

              {/* Franchise Links */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {[
                    { to: "/franchise", label: "Become a Partner" },
                    { to: "/franchise", label: "Apply Now" },
                    { to: "/franchise", label: "Franchise Info" },
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        className="text-amber-100 hover:text-yellow-300 text-sm transition-all duration-300 hover:translate-x-2 inline-block group"
                      >
                        <span className="border-b border-transparent group-hover:border-yellow-300 transition-all duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-amber-100 text-sm mb-4">
                  Follow us for updates!
                </p>
                <div className="flex items-center space-x-4">
                  {[
                    {
                      href: "https://instagram.com",
                      icon: FaInstagram,
                      color: "hover:text-pink-400",
                    },
                    {
                      href: "https://facebook.com",
                      icon: FaFacebookF,
                      color: "hover:text-blue-400",
                    },
                    {
                      href: "https://twitter.com",
                      icon: FaTwitter,
                      color: "hover:text-sky-400",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2xl text-yellow-300 ${social.color} transition-all duration-300 hover:scale-125 hover:rotate-6`}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-amber-200 text-sm">
                © {new Date().getFullYear()} Tea Mahall. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-amber-200">
                <Link
                  to="/privacy"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/sitemap"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
