import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

interface movie {
  contentDescription:string;
  contentTitle: string
  contentType: string
  content_id: string
}

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) {
  }

  public get_genre_data = (genre_id:number) => {
    return this.http.get<movie[]>(`${environment.base_url}/content/genreId/${genre_id}`);
  }

  public get_movie_by_id = (movie_id: number) => {
    return this.http.get<movie>(`${environment.base_url}/content/contentId/${movie_id}`);
  }
}
