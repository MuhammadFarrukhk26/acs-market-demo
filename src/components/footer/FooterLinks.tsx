import React from 'react';

export default function FooterLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-purple-400">About Us</a></li>
        <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
        <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-purple-400">FAQ</a></li>
        <li><a href="#" className="hover:text-purple-400">Contact</a></li>
      </ul>
    </div>
  );
}