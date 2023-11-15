import { Component, OnInit } from '@angular/core';
import { MovieDTO } from 'src/app/movie-dto.model';
import { MovieService } from 'src/app/service/movie/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = ''; 
  movies: MovieDTO[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  search() {
    if (this.searchTerm.trim() !== '') {
      this.movieService.getMoviesByTitle(this.searchTerm).subscribe(
        (data: MovieDTO[]) => {
          this.movies = data;
          console.log('Movies Data:', this.movies);
        },
        error => {
          console.error('Error fetching movies by title:', error);
        }
      );
    }
  }
}





