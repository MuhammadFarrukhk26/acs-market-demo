import React from 'react';
import { CheckSquare } from 'lucide-react';

interface VerificationButtonProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function VerificationButton({ label, checked, onChange }: VerificationButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2 text-white bg-transparent border border-gray-700 rounded-md px-4 py-2 hover:bg-gray-800"
    >
      <CheckSquare className={checked ? 'text-indigo-500' : 'text-gray-400'} size={20} />
      {label}
    </button>
  );
}