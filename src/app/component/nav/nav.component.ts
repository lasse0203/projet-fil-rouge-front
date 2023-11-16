import { Component } from '@angular/core';
import { SortingService } from 'src/app/service/sorting.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  constructor(private sortingService: SortingService, private modalService: NgbModal) {}

  

  openSortedMoviesModal(): void {
    const modalRef = this.modalService.open(SortedMoviesComponent);
    // Vous pouvez passer des données au composant modal si nécessaire
    modalRef.componentInstance.sortedMovies = this.movies;
  }
}
