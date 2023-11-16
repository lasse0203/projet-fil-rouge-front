import { Component, OnInit } from '@angular/core';
import SerieDTO from 'src/app/models/series-dto';
import { SeriesService } from 'src/app/services/series/series.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  series: SerieDTO[] = [];
  selectedCriterion: 'genre' | 'actor' = 'genre';
  searchTerm: string = '';

  constructor(private serieService : SeriesService) {}

  ngOnInit() {
    this.serieService.getAllSeries().subscribe(
      (series:SerieDTO[]) => {
        this.series = series;
      },
      error => {
        console.error('Error fetching all movies:', error);
      }
    );
  }

  // Trie les films par genre ou par acteur en fonction de selectedCriterion
  sortByCriterion(): void {
    if (this.selectedCriterion === 'genre') {
      this.serieService.getSeriesByGenre(this.searchTerm).subscribe(
        (series: SerieDTO[]) => {
          this.handleSeriesResult(series);
        },
        error => {
          console.error('Error fetching series by genre:', error);
        }
      );
    } else if (this.selectedCriterion === 'actor') {
      this.serieService.getSeriesByActor(this.searchTerm).subscribe(
        (series: SerieDTO[]) => {
          this.handleSeriesResult(series);
        },
        error => {
          console.error('Error fetching series by actor:', error);
        }
      );
    }
  }

  // Fonction pour traiter les résultats du service et mettre à jour la liste de films
  private handleSeriesResult(series: SerieDTO[]): void {
    if (series.length === 0) {
      console.warn(`No series found for ${this.selectedCriterion}: ${this.searchTerm}`);
    }
    this.series = series;
  }
}




