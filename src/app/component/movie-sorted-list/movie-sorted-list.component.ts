import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from 'src/app/service/movie/movie.service';


@Component({
  selector: 'app-movie-sorted-list',
  templateUrl: './movie-sorted-list.component.html',
  styleUrls: ['./movie-sorted-list.component.css']
})
export class MovieSortedListComponent implements OnInit {
  movies: any[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      const sortBy = params.get('sortBy') ?? "";
      this.movieService.getMoviesByGenre(sortBy).subscribe(movies => this.movies = movies);

    });
  }
}
