import React from 'react';
import { Users, Heart } from 'lucide-react';
import { Account } from '../types';

export default function AccountCard({ account }: { account: Account }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={account.image} 
        alt={`${account.platform} account`} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-white">{account.platform}</h3>
          <span className="text-purple-400 font-bold">${account.price}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-400 mb-3">
          <Users className="w-4 h-4" />
          <span>{account.followers} followers</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-400 mb-4">
          <Heart className="w-4 h-4" />
          <span>{account.engagement}% engagement</span>
        </div>
        <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
          View Details
        </button>
      </div>
    </div>
  );
}