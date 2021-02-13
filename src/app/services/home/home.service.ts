import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces
import { ICard } from '../../Interfaces/ICard.Interface';
import { IPost } from '../../Interfaces/IPost.Interface';

// Services
import { IHome } from './home.IService';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends IHome {
  
  url: string = 'https://jsonplaceholder.typicode.com/todos';
  postUrl : string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    super();
  }

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postUrl)
  }

  getAllCardDetails(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.url);
  }
}
