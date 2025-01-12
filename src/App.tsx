import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedAccounts from "./components/FeaturedAccounts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white-900">
      {/* <Header /> */}
      <Hero />
      <main className="max-w-7xl mx-auto">
        <FeaturedAccounts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
