import React, { useState } from 'react';
import { Button } from './Button';
import { Search, ChevronDown } from 'lucide-react';
import { RangeInput } from './RangeInput';
import { VerificationButton } from './VerificationButton';

const platforms = ['YouTube', 'TikTok', 'Twitter', 'Instagram', 'Facebook', 'Telegram'];

export function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [verifiedListings, setVerifiedListings] = useState(false);
  const [verifiedIdentity, setVerifiedIdentity] = useState(false);
  
  const [subscribersFrom, setSubscribersFrom] = useState('');
  const [subscribersTo, setSubscribersTo] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [incomeFrom, setIncomeFrom] = useState('');
  const [incomeTo, setIncomeTo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      searchTerm,
      selectedSubject,
      verifiedListings,
      verifiedIdentity,
      subscribers: { from: subscribersFrom, to: subscribersTo },
      price: { from: priceFrom, to: priceTo },
      income: { from: incomeFrom, to: incomeTo },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 space-y-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
      <div className="flex flex-wrap gap-2">
        {platforms?.map((platform) => (
          <Button key={platform} variant="outline" className='hover:bg-violet-700' onClick={(e)=>{e.preventDefault()}}>
            {platform}
          </Button>
        ))}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name"
          className="w-full pl-10 pr-4 py-3 rounded-md bg-white"
        />
      </div>

      <div className="relative">
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="w-full px-4 py-3 rounded-md bg-white appearance-none"
        >
          <option value="">Select subject</option>
          <option value="gaming">Gaming</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="education">Education</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <div className="flex gap-4">
        <VerificationButton
          label="Verified listings"
          checked={verifiedListings}
          onChange={setVerifiedListings}
        />
        <VerificationButton
          label="Verified identity"
          checked={verifiedIdentity}
          onChange={setVerifiedIdentity}
        />
      </div>

      <div className="space-y-4">
        <RangeInput
          label="Subscribers"
          fromValue={subscribersFrom}
          toValue={subscribersTo}
          onFromChange={setSubscribersFrom}
          onToChange={setSubscribersTo}
        />
        <RangeInput
          label="Price"
          fromValue={priceFrom}
          toValue={priceTo}
          onFromChange={setPriceFrom}
          onToChange={setPriceTo}
        />
        <RangeInput
          label="Income"
          fromValue={incomeFrom}
          toValue={incomeTo}
          onFromChange={setIncomeFrom}
          onToChange={setIncomeTo}
        />
      </div>

      <div className="flex justify-center">
        <Button type="submit" className="px-8">
          Search
        </Button>
      </div>
    </form>
  );
}