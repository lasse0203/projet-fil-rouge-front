
import { Component, OnInit } from '@angular/core';
import { MovieDTO } from '../movie-dto.model';
import { MovieService } from '../service/movie/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: MovieDTO[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getAllMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}
