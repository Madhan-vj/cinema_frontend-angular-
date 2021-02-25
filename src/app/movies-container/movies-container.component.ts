import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiService } from '../services/movie-api.service';


interface movie {
    contentDescription:string;
    contentTitle: string
    contentType: string
    content_id: string
}

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})

export class MoviesContainerComponent implements OnInit {

  public drama:movie[];
  public fantasy:movie[];

  constructor(private movie_api: MovieApiService,private router: Router) {
  }

  ngOnInit(): void {
    // Get drama genere
    this.movie_api.get_genre_data(5)
    .subscribe((result)=>{
      this.drama = result;
    })

    // Get fantasy genere
    this.movie_api.get_genre_data(1)
    .subscribe((result)=>{
      this.fantasy = result;
    })
  }
  on_select(movie_id:number):void{
    this.router.navigate(['/movie-info', movie_id])
    // this.router.;
    //movie-info
  }
}
