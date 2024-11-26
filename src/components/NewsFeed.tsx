import React from 'react';
import { NewsItem } from './NewsItem';
import { newsItems, sources } from '../data/mockData';

export function NewsFeed() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
      {newsItems.map((item) => (
        <NewsItem
          key={item.id}
          item={item}
          source={sources.find((s) => s.id === item.sourceId)!}
        />
      ))}
    </div>
  );
}