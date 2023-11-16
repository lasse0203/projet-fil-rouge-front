

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDTO } from 'src/app/movie-dto.model';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:8080/api/v1/movies';

  constructor(private http: HttpClient) {}

  importMovies(): Observable<void> {
    return this.http.get<void>(`${this.apiUrl}/import`);
  }

  getAllMovies(): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(`${this.apiUrl}/list`);
  }


  getMovieById(id: number): Observable<MovieDTO> {
    return this.http.get<MovieDTO>(`http://localhost:8080/api/v1/movies/${id}`);
}


  getMoviesByGenre(genre: string): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(`http://localhost:8080/api/v1/movies/genre/${genre}`);
  }

  getMoviesByActor(actor: string): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(`http://localhost:8080/api/v1/movies/actor/${actor}`);
  }

  getMoviesByTitle(title: string): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(`${this.apiUrl}/title?title=${title}`);
  }
}
