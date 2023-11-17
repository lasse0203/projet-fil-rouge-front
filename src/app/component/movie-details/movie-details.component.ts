

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
    console.log('MovieDetailsComponent initialized.');

    const snapshot = this.route.snapshot;

    if (snapshot && snapshot.paramMap) {
      const movieId = +snapshot.paramMap.get('id')!;
      console.log('Movie ID:', movieId);

      this.movieService.getMovieById(movieId).subscribe(
        (data: MovieDTO) => {
          console.log('Movie details:', data);
          this.movie = data;
        },
        error => {
          console.error('Error fetching movie details:', error);
        }
      );
    }
  }
}
