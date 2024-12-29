import React from 'react';
import AccountCard from './AccountCard';
import { accounts } from '../data/accounts';

export default function FeaturedAccounts() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Featured Accounts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </section>
  );
}