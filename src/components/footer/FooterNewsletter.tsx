import React from 'react';

export default function FooterNewsletter() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
      <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
      <form className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-r-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}