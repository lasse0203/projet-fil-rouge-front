import { Component, OnInit } from '@angular/core';
import SerieDTO from 'src/app/models/series-dto';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = ''; 
  series: SerieDTO[] = [];

  constructor(private serieService : SeriesService) {}

  ngOnInit() {}

  search() {
    if (this.searchTerm.trim() !== '') {
      this.serieService.getSeriesByTitle(this.searchTerm).subscribe(
        (data: SerieDTO[]) => {
          this.series = data;
          console.log('Series Data:', this.series);
        },
        error => {
          console.error('Error fetching movies by title:', error);
        }
      );
    }
  }
}





