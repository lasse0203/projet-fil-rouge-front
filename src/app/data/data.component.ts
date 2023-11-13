import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  donnees: any;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit() {
    this.connectionService.getDonnees().subscribe((data) => {
      this.donnees = data;
    });
  }

}








