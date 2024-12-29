import React from 'react';
import { User, Mail, Lock } from 'lucide-react';

export default function SignupForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-2">Username</label>
        <div className="relative">
          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
            placeholder="Choose a username"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="email"
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="password"
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
            placeholder="Create a password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg mt-6"
      >
        Create Account
      </button>
    </form>
  );
}