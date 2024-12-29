import React, { Fragment } from "react";
import AccountCard from "./AccountCard";
import { accounts } from "../data/accounts";

export default function FeaturedAccounts() {
  return (
    <Fragment>
      <section className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          Featured Accounts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>
      </section>
      <section className="p-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Social-market is your reliable partner for buying and selling
            Telegram channels.
          </h2>
          <p className="text-gray-400">
            Social-market is a unique service that allows you to securely make
            deals between sellers and buyers of social media accounts. If you're
            a buyer, we'll guarantee the transfer of your new channel to you, or
            your money back. And as a seller, you can be sure that you'll either
            get your agreed-upon payment, or your channel will be returned to
            you.
          </p>
        </div>
      </section>
    </Fragment>
  );
}
