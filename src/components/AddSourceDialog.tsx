import React, { useState } from 'react';
import { X } from 'lucide-react';
import { suggestedSources } from '../data/mockData';
import type { SuggestedSource } from '../types';

interface AddSourceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSource: (url: string) => void;
}

export function AddSourceDialog({ isOpen, onClose, onAddSource }: AddSourceDialogProps) {
  const [url, setUrl] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestedSource[]>([]);

  const handleUrlChange = (input: string) => {
    setUrl(input);
    // Simple suggestion logic based on URL content
    if (input.includes('tech') || input.includes('developer')) {
      setSuggestions(suggestedSources.tech);
    } else if (input.includes('news')) {
      setSuggestions(suggestedSources.news);
    } else {
      setSuggestions([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add News Source</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <input
          type="url"
          value={url}
          onChange={(e) => handleUrlChange(e.target.value)}
          placeholder="Enter website URL"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {suggestions.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Similar sources you might like:</h3>
            <div className="space-y-2">
              {suggestions.map((source) => (
                <button
                  key={source.url}
                  onClick={() => onAddSource(source.url)}
                  className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <img src={source.favicon} alt="" className="w-6 h-6" />
                  <span className="font-medium">{source.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => onAddSource(url)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add Source
          </button>
        </div>
      </div>
    </div>
  );
}