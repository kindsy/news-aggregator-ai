import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-news-feed',
  imports: [],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.css'
})
export class NewsFeedComponent implements OnInit {
  articles: any[] = [];

  constructor(private newsApi: NewsApiService) {}

  ngOnInit() {
    this.newsApi.getNews().subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

}
