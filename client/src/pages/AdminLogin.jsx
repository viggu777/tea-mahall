// src/pages/AdminLogin.jsx
import React from "react";
import { SignIn } from "@clerk/clerk-react";

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <SignIn
            path="/admin/login"
            routing="path"
            signUpUrl="/admin/login"
            redirectUrl="/menu"
            afterSignInUrl="/menu"
            appearance={{
              elements: {
                card: {
                  boxShadow: "none",
                  border: "none",
                  backgroundColor: "transparent",
                },
                footer: { display: "none" },
                formButtonPrimary: {
                  backgroundColor: "#ea580c",
                  fontSize: "16px",
                  padding: "12px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#dc2626",
                  },
                },
                formFieldInput: {
                  borderColor: "#d1d5db",
                  borderRadius: "8px",
                  padding: "12px",
                  fontSize: "16px",
                  "&:focus": {
                    borderColor: "#ea580c",
                    boxShadow: "0 0 0 3px rgba(234, 88, 12, 0.1)",
                  },
                },
                formFieldLabel: {
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                },
                socialButtonsBlockButton: {
                  backgroundColor: "white",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  padding: "12px",
                  fontSize: "16px",
                  color: "#374151",
                  "&:hover": {
                    backgroundColor: "#f9fafb",
                    borderColor: "#9ca3af",
                  },
                },
              },
            }}
          />
          <a href="/" className="text-gray-600 hover:text-orange-600">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
