import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Article, NewsResponse } from '../interfaces';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http:HttpClient) { }
  
  getTopHeadlines(): Observable <Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
    ).pipe(
      map(({ articles }) => articles)
    );
  }

 

}
