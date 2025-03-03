import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class NewsApiService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=fcd59a17a32946da8b0b4b5cd050f03b';
  
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(this.apiUrl);
  }
}