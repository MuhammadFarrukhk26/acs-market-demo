import React from 'react';

interface RangeInputProps {
  label: string;
  fromValue: string;
  toValue: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
}

export function RangeInput({ label, fromValue, toValue, onFromChange, onToChange }: RangeInputProps) {
  return (
    <div className="grid grid-cols-[100px_1fr_auto_1fr] items-center gap-4">
      <span className="text-white">{label}:</span>
      <input
        type="text"
        value={fromValue}
        onChange={(e) => onFromChange(e.target.value)}
        placeholder="from"
        className="bg-white rounded-md px-3 py-2 w-full text-black"
      />
      <span className="text-white">—</span>
      <input
        type="text"
        value={toValue}
        onChange={(e) => onToChange(e.target.value)}
        placeholder="to"
        className="bg-white rounded-md px-3 py-2 w-full text-black"
      />
    </div>
  );
}