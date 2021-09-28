import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { Launch } from 'src/app/interfaces/launch';
import { ArticlesService } from 'src/app/services/articles-service/articles.service';
import { UpcomingLaunchService } from 'src/app/services/upcoming-launch-service/upcoming-launch.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  launch: Launch;
  articles: Article[];
  page: number = 1;

  constructor(
    private upcomingLaunchService: UpcomingLaunchService,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    // next upcoming launch
    this.upcomingLaunchService.getNextLaunch().subscribe((data) => {
      this.launch = data;
    });

    // list of articles
    this.articlesService.getArticles().subscribe((data) => {
      this.articles = data;
      console.log(this.articles);
    });
  }

  scroll() {
    document.getElementById('target').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
