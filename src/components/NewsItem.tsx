import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { NewsItem as NewsItemType, NewsSource } from '../types';

interface NewsItemProps {
  item: NewsItemType;
  source: NewsSource;
}

export function NewsItem({ item, source }: NewsItemProps) {
  const timeAgo = formatDistanceToNow(new Date(item.timestamp), { addSuffix: true });

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-b border-gray-100 hover:bg-gray-50 transition-colors"
    >
      <article className="px-6 py-4">
        <div className="flex items-baseline justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">{source.name}</span>
            <span className="text-sm text-gray-500">{timeAgo}</span>
          </div>
        </div>
        
        <h2 className="font-semibold text-lg text-gray-900 mb-1">{item.title}</h2>
        <p className="text-gray-600 line-clamp-2">{item.content}</p>
        
        {item.imageUrl && (
          <div className="mt-3">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="rounded-lg w-full object-cover max-h-80"
            />
          </div>
        )}
      </article>
    </a>
  );
}