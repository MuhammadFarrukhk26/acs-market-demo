import React, { useState } from "react";
import { ShoppingBag, Menu, Bell } from "lucide-react";
import NavLinks from "./NavLinks";
import AuthModal from "./auth/AuthModal";

export default function Header() {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [showAuthModal, setShowAuthModal] = useState(false);

  const openAuth = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ShoppingBag className="w-8 h-8 text-purple-400" />
          <span className="text-xl font-bold">SocialMarket</span>
        </div>

        {/* <NavLinks /> */}

        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 cursor-pointer hover:text-purple-400" />
          <button
            onClick={() => openAuth("login")}
            className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg"
          >
            Sign In
          </button>
          <button
            onClick={() => openAuth("signup")}
            className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg"
          >
            Sign Up
          </button>
          <Menu className="md:hidden w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
      />
    </header>
  );
}
