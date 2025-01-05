import React, { useState } from "react";
import { ShoppingBag, Menu, Bell } from "lucide-react";
import NavLinks from "./NavLinks";
import logoimg from "../assets/ACS-.png";
import AuthModal from "./auth/AuthModal";

export default function Header() {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [showAuthModal, setShowAuthModal] = useState(false);

  const openAuth = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <header className="bg-transparent flex text-white py-4 px-6 top-0 ">
      <div className="max-w-7xl mx-auto flex justify-center items-center space-x-4">
        <div className=" text-center items-center ml-10">
          {/* <ShoppingBag className="w-8 h-8 text-purple-400" /> */}
          <img src={logoimg} />
          <p className="text-xl font-bold">
            Quick & Secure social media marketplace.
          </p>
        </div>
        {/* 
        <div className="flex items-center space-x-2">
          <Bell className="w-6 h-6 cursor-pointer hover:text-purple-400" />
          <button onClick={() => openAuth("login")} className="rounded-lg">
            Sign In
          </button>
          <span>/</span>
          <button onClick={() => openAuth("signup")} className="rounded-lg">
            Sign Up
          </button>
          <Menu className="md:hidden w-6 h-6 cursor-pointer" />
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            mode={authMode}
          />
        </div> */}
      </div>
      <div className="flex items-center space-x-2 pr-6">
        <Bell className="w-6 h-6 cursor-pointer hover:text-purple-400" />
        <button onClick={() => openAuth("login")} className="rounded-lg">
          Sign In
        </button>
        <span>/</span>
        <button onClick={() => openAuth("signup")} className="rounded-lg">
          Sign Up
        </button>
        <Menu className="md:hidden w-6 h-6 cursor-pointer" />
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          mode={authMode}
        />
      </div>
    </header>
  );
}
