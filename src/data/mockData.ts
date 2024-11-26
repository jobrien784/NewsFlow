import { NewsItem, NewsSource, SuggestedSource } from '../types';

export const sources: NewsSource[] = [
  {
    id: 'techcrunch',
    name: 'TechCrunch',
    url: 'https://techcrunch.com',
    favicon: 'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png',
    category: 'tech'
  },
  {
    id: 'theverge',
    name: 'The Verge',
    url: 'https://www.theverge.com',
    favicon: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7395367/favicon-64x64.0.png',
    category: 'tech'
  },
];

export const suggestedSources: Record<string, SuggestedSource[]> = {
  tech: [
    {
      name: 'Wired',
      url: 'https://www.wired.com',
      favicon: 'https://www.wired.com/favicon.ico',
      category: 'tech'
    },
    {
      name: 'Ars Technica',
      url: 'https://arstechnica.com',
      favicon: 'https://favicon.arstechnica.com/favicon.ico',
      category: 'tech'
    }
  ],
  news: [
    {
      name: 'Reuters',
      url: 'https://www.reuters.com',
      favicon: 'https://www.reuters.com/favicon.ico',
      category: 'news'
    },
    {
      name: 'Associated Press',
      url: 'https://apnews.com',
      favicon: 'https://apnews.com/favicon.ico',
      category: 'news'
    }
  ]
};

export const newsItems: NewsItem[] = [
  {
    id: '1',
    sourceId: 'techcrunch',
    title: 'Apple announces new MacBook Pro with M3 chip',
    content: 'Apple has unveiled its latest MacBook Pro lineup featuring the new M3 chip, promising significant performance improvements...',
    url: 'https://techcrunch.com/example',
    timestamp: '2024-03-20T14:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '2',
    sourceId: 'theverge',
    title: 'OpenAI releases GPT-5 with enhanced capabilities',
    content: 'OpenAI has announced the release of GPT-5, featuring improved reasoning capabilities and better understanding of context...',
    url: 'https://www.theverge.com/example',
    timestamp: '2024-03-20T13:15:00Z',
  },
];