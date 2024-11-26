import React, { useState } from 'react';
import { Header } from './components/Header';
import { NewsFeed } from './components/NewsFeed';
import { AddSourceDialog } from './components/AddSourceDialog';

export default function App() {
  const [isAddSourceOpen, setIsAddSourceOpen] = useState(false);

  const handleAddSource = (url: string) => {
    console.log('Adding source:', url);
    setIsAddSourceOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddSource={() => setIsAddSourceOpen(true)} />
      <main className="container mx-auto px-4 py-6">
        <NewsFeed />
      </main>
      <AddSourceDialog
        isOpen={isAddSourceOpen}
        onClose={() => setIsAddSourceOpen(false)}
        onAddSource={handleAddSource}
      />
    </div>
  );
}