import React from 'react';
import { Newspaper } from 'lucide-react';

interface HeaderProps {
  onAddSource: () => void;
}

export function Header({ onAddSource }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Newspaper className="w-8 h-8 text-blue-500" />
          <h1 className="text-xl font-bold">NewsFlow</h1>
        </div>
        <button
          onClick={onAddSource}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          Add Source
        </button>
      </div>
    </header>
  );
}