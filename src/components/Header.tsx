import React, { useState } from "react";
import { ShoppingBag, Menu, Bell, HandshakeIcon } from "lucide-react";
import NavLinks from "./NavLinks";
import logoimg from "../assets/logo.png";
import AuthModal from "./auth/AuthModal";

export default function Header() {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [showAuthModal, setShowAuthModal] = useState(false);

  const openAuth = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <header className="bg-transparent text-white py-4 mb-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Centered Logo and Brand */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            {/* <HandshakeIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Accs-market.com</span> */}
            <img src={logoimg} />
          </div>
          <p className="text-lg text-white">
            Quick & Secure social media marketplace.
          </p>
        </div>

        {/* Spacer div to maintain layout */}
        <div className="invisible">
          <HandshakeIcon className="h-6 w-6" />
        </div>

        {/* Auth Buttons */}
        {/* sm:text-base */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => openAuth("signup")}
            className="sell-btn text-white px-4 rounded-lg hover:bg-purple-800 transition text-sm"
          >
            Start Selling
          </button>
          <div className="md:block">
            {/* <button className="text-gray-300 hover:text-white transition"> */}
            <button
              onClick={() => openAuth("login")}
              className="text-white hover:text-purple-400 transition text-sm sm:text-base"
            >
              Sign In
            </button>{" "}
            <span className="text-gray-400">/</span>{" "}
            <button
              onClick={() => openAuth("signup")}
              className="text-white hover:text-purple-400 transition text-sm sm:text-base"
            >
              Sign Up
            </button>
            {/* </button> */}
          </div>
        </div>
      </div>
      {/* Authentication Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
      />
    </header>
  );
}
