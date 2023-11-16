import { Component, OnInit } from '@angular/core';
import SerieDTO from 'src/app/models/series-dto';
import { SeriesService } from 'src/app/services/series/series.service';
import { SortingService } from 'src/app/services/sorting.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  series: SerieDTO[] = [];
  selectedCriterion: 'genre' | 'actor' = 'genre';
  searchTerm: string = '';

  constructor(private sortingService: SortingService, private modalService: NgbModal) {}

  

  openSortedSeriesModal(): void {
    const modalRef = this.modalService.open(SortedSeriesComponent);
    // Vous pouvez passer des données au composant modal si nécessaire
    modalRef.componentInstance.sortedSeries = this.series;
  }
  // ngOnInit() {
  //   this.serieService.getAllSeries().subscribe(
  //     (series:SerieDTO[]) => {
  //       this.series = series;
  //     },
  //     error => {
  //       console.error('Error fetching all series:', error);
  //     }
  //   );
  // }

  // // Trie les films par genre ou par acteur en fonction de selectedCriterion
  // sortByCriterion(): void {
  //   if (this.selectedCriterion === 'genre') {
  //     this.serieService.getSeriesByGenre(this.searchTerm).subscribe(
  //       (series: SerieDTO[]) => {
  //         this.series= series
  //         //this.handleSeriesResult(series);
  //       },
  //       error => {
  //         console.error('Error fetching series by genre:', error);
  //       }
  //     );
  //   } else if (this.selectedCriterion === 'actor') {
  //     this.serieService.getSeriesByActor(this.searchTerm).subscribe(
  //       (series: SerieDTO[]) => {
  //         this.handleSeriesResult(series);
  //       },
  //       error => {
  //         console.error('Error fetching series by actor:', error);
  //       }
  //     );
  //   }
  // }

  // // Fonction pour traiter les résultats du service et mettre à jour la liste de films
  // private handleSeriesResult(series: SerieDTO[]): void {
  //   if (series.length === 0) {
  //     console.warn(`No series found for ${this.selectedCriterion}: ${this.searchTerm}`);
  //   }
  //   this.series = series;
  // }
}




