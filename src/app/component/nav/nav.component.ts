import { Component, OnInit } from '@angular/core';
import { MovieDTO } from 'src/app/movie-dto.model';
import { MovieService } from 'src/app/service/movie/movie.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  movies: MovieDTO[] = [];
  selectedCriterion: 'genre' | 'actor' = 'genre';
  searchTerm: string = '';

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.movieService.getAllMovies().subscribe(
      (movies: MovieDTO[]) => {
        this.movies = movies;
      },
      error => {
        console.error('Error fetching all movies:', error);
      }
    );
  }

  // Trie les films par genre ou par acteur en fonction de selectedCriterion
  sortByCriterion(): void {
    console.log('Selected Criterion:', this.selectedCriterion);
    console.log('Search Term:', this.searchTerm);
    if (this.selectedCriterion === 'genre') {
      this.movieService.getMoviesByGenre(this.searchTerm).subscribe(
        (movies: MovieDTO[]) => {
          this.handleMoviesResult(movies);
        },
        error => {
          console.error('Error fetching movies by genre:', error);
        }
      );
    } else if (this.selectedCriterion === 'actor') {
      this.movieService.getMoviesByActor(this.searchTerm).subscribe(
        (movies: MovieDTO[]) => {
          this.handleMoviesResult(movies);
        },
        error => {
          console.error('Error fetching movies by actor:', error);
        }
      );
    }
    this.router.navigate(['/movie-sorted-list'], { queryParams: { sortBy: this.searchTerm } });
  }

  // Fonction pour traiter les résultats du service et mettre à jour la liste de films
  private handleMoviesResult(movies: MovieDTO[]): void {
    console.log('Handling Movies Result:', movies);

    if (movies.length === 0) {
      console.warn(`No movies found for ${this.selectedCriterion}: ${this.searchTerm}`);
    }
    this.movies = movies;
  }
}

