import React from 'react';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

export default function FooterSocial() {
  return (
    <div>
      <h3 className="text-lg text-prime font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-purple-400">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="hover:text-purple-400">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="#" className="hover:text-purple-400">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="#" className="hover:text-purple-400">
          <Youtube className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}