import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSortedListComponent } from './component/movie-sorted-list/movie-sorted-list.component';


const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: 'movie-sorted-list', component: MovieSortedListComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
