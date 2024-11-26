export interface NewsSource {
  id: string;
  name: string;
  url: string;
  favicon: string;
  category: string;
}

export interface NewsItem {
  id: string;
  sourceId: string;
  title: string;
  content: string;
  url: string;
  timestamp: string;
  imageUrl?: string;
}

export interface SuggestedSource {
  name: string;
  url: string;
  favicon: string;
  category: string;
}