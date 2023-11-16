import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import SerieDTO from 'src/app/models/series-dto';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {

  serie!: SerieDTO

  constructor(private route: ActivatedRoute, private serieService: SeriesService){}

  ngOnInit() {
    const snapshot = this.route.snapshot;

    if(snapshot && snapshot.paramMap){
      const serieId = +snapshot.paramMap.get('id')!;
      
      this.serieService.getSerieById(serieId).subscribe(
        (data : SerieDTO) => {
          this.serie = data;
        },
        error => {
          console.error('Error fetching series details : ', error);
          
        }
      );
      
    }
  }

}
