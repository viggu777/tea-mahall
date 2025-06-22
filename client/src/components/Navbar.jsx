import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Menu, X, LogOut } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // Mock router functions for demo - replace with your actual router
  const Link = ({ to, children, className, onClick }) => (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  );

  const useNavigate = () => (path) => console.log(`Navigate to ${path}`);
  const useLocation = () => ({ pathname: window.location.pathname || "/" });

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // 🔁 Re-check login status on route change
  useEffect(() => {
    // Check both localStorage and sessionStorage for various token names
    const tokenChecks = [
      localStorage?.getItem?.("token"),
      localStorage?.getItem?.("admin_token"),
      localStorage?.getItem?.("authToken"),
      localStorage?.getItem?.("access_token"),
      sessionStorage?.getItem?.("token"),
      sessionStorage?.getItem?.("admin_token"),
      sessionStorage?.getItem?.("authToken"),
      sessionStorage?.getItem?.("access_token"),
    ];

    const token = tokenChecks.find((t) => t !== null && t !== undefined);
    setIsAdmin(!!token);

    // Debug logging - remove in production
    console.log("=== Admin Token Debug ===");
    console.log("localStorage token:", localStorage?.getItem?.("token"));
    console.log(
      "localStorage admin_token:",
      localStorage?.getItem?.("admin_token")
    );
    console.log("sessionStorage token:", sessionStorage?.getItem?.("token"));
    console.log(
      "sessionStorage admin_token:",
      sessionStorage?.getItem?.("admin_token")
    );
    console.log("Found token:", token ? "YES" : "NO");
    console.log("isAdmin set to:", !!token);
    console.log("========================");
  }, [isAdmin]); // updates when path changes

  const handleLogout = () => {
    // Clear all possible token locations
    if (localStorage?.removeItem) {
      localStorage.removeItem("token");
      localStorage.removeItem("admin_token");
      localStorage.removeItem("authToken");
      localStorage.removeItem("access_token");
    }
    if (sessionStorage?.removeItem) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("admin_token");
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("access_token");
    }
    setIsAdmin(false);
    navigate("/"); // ✅ or redirect to login if preferred
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-3 group">
              <div className="relative overflow-hidden rounded-xl p-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-amber-50 group-hover:to-orange-50">
                <img
                  src="/tea-mahal-logo.png"
                  alt="Tea Mahal"
                  className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-2 items-center">
            {[
              { path: "/", label: "Home" },
              { path: "/menu", label: "Menu" },
              { path: "/franchise", label: "Franchise" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 group overflow-hidden ${
                  isActiveRoute(item.path)
                    ? "text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg"
                    : "text-gray-700 hover:text-amber-700"
                }`}
              >
                {/* Background animation on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>

                <span className="relative">{item.label}</span>
              </Link>
            ))}

            {isAdmin && (
              <button
                onClick={handleLogout}
                className="relative ml-4 px-4 py-2 text-red-600 border-2 border-red-200 rounded-full font-medium transition-all duration-300 group overflow-hidden hover:border-red-400 hover:text-red-700"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <span className="relative flex items-center gap-2">
                  <LogOut
                    size={16}
                    className="transition-transform group-hover:scale-110"
                  />
                  Logout
                </span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-3 text-amber-600 focus:outline-none rounded-xl transition-all duration-300 hover:bg-amber-50 group active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <span className="relative">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 border-b border-amber-200">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3 group">
                  <div className="relative overflow-hidden rounded-xl p-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-amber-50 group-hover:to-orange-50">
                    <img
                      src="/tea-mahal-logo.png"
                      alt="Tea Mahal"
                      className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-orange-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                </div>

                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-200 active:scale-95"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <nav
              className="p-4 space-y-1 overflow-y-auto"
              style={{ height: "calc(100vh - 140px)" }}
            >
              {[
                {
                  path: "/",
                  label: "Home",
                  emoji: "🏠",
                  desc: "Welcome to our tea world",
                },
                {
                  path: "/menu",
                  label: "Menu",
                  emoji: "☕",
                  desc: "Explore our tea varieties",
                },
                {
                  path: "/franchise",
                  label: "Franchise",
                  emoji: "🤝",
                  desc: "Join our tea family",
                },
                {
                  path: "/about",
                  label: "About",
                  emoji: "📖",
                  desc: "Our tea story",
                },
                {
                  path: "/contact",
                  label: "Contact",
                  emoji: "📞",
                  desc: "Get in touch with us",
                },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={toggleMenu}
                  className={`block p-3 rounded-xl transition-all duration-300 group active:scale-98 ${
                    isActiveRoute(item.path)
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                      : "hover:bg-gray-50 active:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all duration-300 ${
                        isActiveRoute(item.path)
                          ? "bg-white/20 text-white"
                          : "bg-amber-100 text-amber-600 group-hover:bg-amber-200"
                      }`}
                    >
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-semibold text-base truncate ${
                          isActiveRoute(item.path)
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                      >
                        {item.label}
                      </div>
                      <div
                        className={`text-xs truncate ${
                          isActiveRoute(item.path)
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {isAdmin && (
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="w-full p-3 mt-4 text-red-600 bg-red-50 border border-red-200 rounded-xl font-semibold transition-all duration-300 hover:bg-red-100 hover:border-red-300 group active:scale-98"
                >
                  <div className="flex items-center justify-center gap-2">
                    <LogOut
                      size={18}
                      className="transition-transform group-hover:scale-110"
                    />
                    <span>Logout</span>
                  </div>
                </button>
              )}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t border-gray-200">
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-1">
                  Brewing happiness since day one ☕
                </p>
                <div className="flex justify-center gap-2 text-xs text-amber-600">
                  <span>🌱 Fresh</span>
                  <span>•</span>
                  <span>🔥 Hot</span>
                  <span>•</span>
                  <span>❤️ Love</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
