import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBtnComponent } from './top-bar/nav-btn/nav-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesContainerComponent,
    MovieInfoComponent,
    TopBarComponent,
    NavBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
