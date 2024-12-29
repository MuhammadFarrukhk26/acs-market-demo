import React from 'react';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import FooterNewsletter from './FooterNewsletter';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FooterLinks />
          <FooterSocial />
          <FooterNewsletter />
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SocialMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}