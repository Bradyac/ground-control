import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<any[]>('.netlify/functions/articles').pipe(
      map((response) => {
        let articles: Article[] = [];
        response.forEach((data) => {
          let article: Article = {
            _id: data._id,
            title: data.title,
            url: data.url,
            image_url: data.image_url,
            news_site: data.news_site,
            summary: data.summary,
            published_date: new Date(data.published_date),
            updated_date: new Date(data.updated_date),
          };
          articles.push(article);
        });
        return articles;
      })
    );
  }
}
