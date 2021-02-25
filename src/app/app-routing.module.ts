import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';

const routes: Routes = [
  {path:'',component:MoviesContainerComponent},
  {path:'movie-info/:movie_id',component:MovieInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
