import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../services/movie-api.service';

interface Movie {
  contentDescription:string;
  contentTitle: string
  contentType: string
}

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movie_id:number;
  movie_details:Movie;

  constructor(
    private activatedRoute:ActivatedRoute,
    private movieApiService : MovieApiService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({ movie_id })=>{
      this.movie_id = movie_id;
    });
    this.movieApiService.get_movie_by_id(this.movie_id).subscribe((result)=>{
      this.movie_details = result;
      console.log(this.movie_details)
    })

  }

}
