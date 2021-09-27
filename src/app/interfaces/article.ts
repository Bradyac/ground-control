export interface Article {
  _id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_date: Date;
  updated_date: Date;
}
