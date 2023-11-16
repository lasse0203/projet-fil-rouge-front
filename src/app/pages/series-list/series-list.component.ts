import { Component, OnInit } from '@angular/core';
import SerieDTO from 'src/app/models/series-dto';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: SerieDTO[] =[];

  constructor(private serieService: SeriesService){}

  ngOnInit(){
    this.serieService.getAllSeries().subscribe((data) => {
      this.series = data;
    });
  }
}
