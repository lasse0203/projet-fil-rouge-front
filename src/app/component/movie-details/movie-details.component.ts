// movie-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDTO } from 'src/app/movie-dto.model';
import { MovieService } from 'src/app/service/movie/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie!: MovieDTO;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    const snapshot = this.route.snapshot;

    if (snapshot && snapshot.paramMap) {
      const movieId = +snapshot.paramMap.get('id')!;

      this.movieService.getMovieById(movieId).subscribe(
        (data: MovieDTO) => {
          this.movie = data;
        },
        error => {
          console.error('Error fetching movie details:', error);
        }
      );
    }
  }
}

