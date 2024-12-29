import React from 'react';

export default function NavLinks() {
  return (
    <nav className="hidden md:flex space-x-6">
      <a href="#" className="hover:text-purple-400">Buy Accounts</a>
      <a href="#" className="hover:text-purple-400">Sell Account</a>
      <a href="#" className="hover:text-purple-400">Pricing</a>
      <a href="#" className="hover:text-purple-400">Support</a>
    </nav>
  );
}