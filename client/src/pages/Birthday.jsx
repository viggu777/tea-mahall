import React, { useState, useEffect } from "react";
import { Heart, Star, Gift, Sparkles, Home, ChevronRight } from "lucide-react";

// Founder Photo Slideshow Component
const FounderPhotoSlideshow = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const founderPhotos = [
    {
      id: 1,
      title: "Visionary Leader",
      description: "Leading with passion and dedication",
    },
    {
      id: 2,
      title: "Tea Master",
      description: "Crafting the perfect blend",
    },
    {
      id: 3,
      title: "Business Pioneer",
      description: "Building dreams into reality",
    },
    {
      id: 4,
      title: "Community Builder",
      description: "Bringing people together",
    },
    {
      id: 5,
      title: "Celebrating Success",
      description: "Moments of achievement and joy",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % founderPhotos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Main Photo Display */}
      <div className="relative w-80 h-80 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full p-1 animate-pulse">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            {founderPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentPhoto
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-110 rotate-3"
                }`}
              >
                {/* Replace with actual founder photos */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👤</div>
                    <div className="text-sm font-bold">{photo.title}</div>
                  </div>
                </div>
                {/* Replace above div with: */}
                {/* <img 
                  src={`/path/to/founder-photo-${photo.id}.jpg`} 
                  alt={photo.title}
                  className="w-full h-full object-cover"
                /> */}
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Floating celebration icons */}
        <div className="absolute -top-4 -right-4 animate-bounce">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            🎂
          </div>
        </div>
        <div className="absolute -bottom-4 -left-4 animate-bounce delay-500">
          <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
            🎈
          </div>
        </div>
        <div className="absolute top-1/2 -left-6 animate-bounce delay-1000">
          <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center shadow-lg">
            ⭐
          </div>
        </div>
        <div className="absolute top-1/4 -right-6 animate-bounce delay-700">
          <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
            🎉
          </div>
        </div>
      </div>

      {/* Photo Title and Description */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-500">
          {founderPhotos[currentPhoto].title}
        </h3>
        <p className="text-gray-300 transition-all duration-500">
          {founderPhotos[currentPhoto].description}
        </p>
      </div>

      {/* Photo Navigation Dots */}
      <div className="flex justify-center space-x-3 mb-6">
        {founderPhotos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhoto(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentPhoto
                ? "bg-yellow-400 scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function FounderBirthdayWish() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showFireworks, setShowFireworks] = useState(false);
  const [particles, setParticles] = useState([]);

  // Create floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  // Auto-progress through steps
  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentStep < 3) {
          setCurrentStep(currentStep + 1);
        }
        if (currentStep === 1) {
          setShowFireworks(true);
        }
      },
      currentStep === 0 ? 2000 : 3000
    );

    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleRedirectHome = () => {
    // In a real implementation, you would redirect to your home page
    window.location.href = "/";
    alert("Redirecting to home page...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s ${particle.delay}s infinite ease-in-out alternate`,
            }}
          />
        ))}
      </div>

      {/* Fireworks Effect */}
      {showFireworks && (
        <div className="absolute inset-0 z-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + (i % 2) * 30}%`,
                background: `radial-gradient(circle, ${
                  [
                    "#ff6b6b",
                    "#4ecdc4",
                    "#45b7d1",
                    "#96ceb4",
                    "#ffeaa7",
                    "#dda0dd",
                  ][i]
                } 0%, transparent 70%)`,
                animation: `firework 2s ${i * 0.3}s ease-out forwards`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Step 0: Welcome Animation */}
          {currentStep >= 0 && (
            <div
              className={`transform transition-all duration-1000 ${
                currentStep > 0
                  ? "scale-110 opacity-100"
                  : "scale-100 opacity-80"
              }`}
            >
              <div className="mb-8 relative">
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  🎉 HAPPY BIRTHDAY! 🎉
                </h1>
                <div className="absolute -top-4 -right-4 animate-bounce">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 animate-bounce delay-300">
                  <Star className="w-6 h-6 text-pink-400" />
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Founder Personal Photos Slideshow */}
          {currentStep >= 1 && (
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                currentStep >= 1
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl">
                <FounderPhotoSlideshow />

                <div className="text-center mt-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Dear Visionary Founder
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                    Today we celebrate not just your birthday, but the
                    incredible journey you've started with{" "}
                    <span className="text-yellow-400 font-bold">Tea Mahal</span>
                    . Your vision continues to brew success and bring joy to
                    countless people!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Wishes & Blessings */}
          {currentStep >= 2 && (
            <div
              className={`transform transition-all duration-1000 delay-1000 ${
                currentStep >= 2
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-300/30 transform hover:scale-105 transition-transform">
                  <Heart className="w-8 h-8 text-red-400 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Health & Happiness
                  </h3>
                  <p className="text-gray-300">
                    May your life be filled with endless joy and perfect health
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-300/30 transform hover:scale-105 transition-transform delay-100">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4 animate-spin-slow" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Success & Prosperity
                  </h3>
                  <p className="text-gray-300">
                    May Tea Mahal reach new heights under your leadership
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 transform hover:scale-105 transition-transform delay-200">
                  <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Dreams & Aspirations
                  </h3>
                  <p className="text-gray-300">
                    May all your dreams steep into beautiful reality
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Final Message & Redirect */}
          {currentStep >= 3 && (
            <div
              className={`transform transition-all duration-1000 delay-1500 ${
                currentStep >= 3
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/40 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-pulse">
                  🌟 Another Year of Excellence! 🌟
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  From all of us at Tea Mahal, we wish you a spectacular
                  birthday filled with love, laughter, and endless cups of joy!
                </p>

                <button
                  onClick={handleRedirectHome}
                  className="group bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center mx-auto gap-3"
                >
                  <Home className="w-6 h-6 group-hover:animate-bounce" />
                  Return to Tea Mahal
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes firework {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(3) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
