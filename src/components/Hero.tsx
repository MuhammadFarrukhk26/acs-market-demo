import React from "react";
import { SearchForm } from "./SearchForm";
export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative z-10">
          <SearchForm />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-50" />
    </div>
  );
}
