import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const stats = [
  { name: 'BTC/USDT', price: '43,521.23', change: '+2.45%', isPositive: true },
  { name: 'ETH/USDT', price: '2,245.87', change: '-1.23%', isPositive: false },
  { name: 'BNB/USDT', price: '312.45', change: '+0.87%', isPositive: true },
];

export default function MarketStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-gray-800 p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">{stat.name}</span>
            {stat.isPositive ? (
              <TrendingUp className="w-5 h-5 text-green-500" />
            ) : (
              <TrendingDown className="w-5 h-5 text-red-500" />
            )}
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold text-white">${stat.price}</span>
            <span className={`ml-2 ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}