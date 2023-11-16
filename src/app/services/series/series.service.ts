import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import SerieDTO from 'src/app/models/series-dto';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {


  private apiUrl = `http://localhost:8080/api/v1/series`;

  constructor(private http: HttpClient) { }

  importSeries(): Observable<void> {
    return this.http.get<void>(`${this.apiUrl}/import`);
  }

  getAllSeries() : Observable<SerieDTO[]> {
    return this.http.get<SerieDTO[]>(`${this.apiUrl}/list`);
  }

  getSerieById(serieId: number) : Observable<SerieDTO> {
    return this.http.get<SerieDTO>(`${this.apiUrl}/id/${serieId}`)
  }

  getSeriesByGenre(genre : string) : Observable<SerieDTO[]> {
    return this.http.get<SerieDTO[]>(`${this.apiUrl}/genre/${genre}`)
  }

  getSeriesByActor(actor : string) : Observable<SerieDTO[]> {
    return this.http.get<SerieDTO[]>(`${this.apiUrl}/actor/${actor}`)
  }

  getSeriesByTitle(title : string ) : Observable<SerieDTO[]> {
    return this.http.get<SerieDTO[]>(`${this.apiUrl}/title/${title}`)
  }
}
