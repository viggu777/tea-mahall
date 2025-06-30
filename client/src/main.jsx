import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { ClerkProvider } from "@clerk/clerk-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const clerkPubKey = "pk_test_d2VsbC1iZWUtNjUuY2xlcmsuYWNjb3VudHMuZGV2JA"; // Replace with your actual key

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <App />
        <ToastContainer position="top-center" autoClose={3000} />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
