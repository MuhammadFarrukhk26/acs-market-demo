import React from "react";
import { SearchForm } from "./SearchForm";
import Header from "./Header";
export default function Hero() {
  return (
    <div className="relative bg-img bg-gray-900 text-white py-4">
      {/* <Header/> */}
      <Header/>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="relative z-10">
          
          <SearchForm />
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-50" /> */}
    </div>
  );
}
