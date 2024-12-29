import { Account } from '../types';

export const accounts: Account[] = [
  {
    id: 1,
    platform: 'Instagram',
    followers: '250K',
    engagement: 4.8,
    price: '2,999',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    category: 'Lifestyle'
  },
  {
    id: 2,
    platform: 'TikTok',
    followers: '500K',
    engagement: 6.2,
    price: '3,499',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80',
    category: 'Entertainment'
  },
  {
    id: 3,
    platform: 'Twitter',
    followers: '100K',
    engagement: 3.5,
    price: '1,999',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80',
    category: 'Business'
  }
];