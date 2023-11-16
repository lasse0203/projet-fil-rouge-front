import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SortingService {

  private sortingSubject = new BehaviorSubject<{ criterion: string; searchTerm: string } | null>(null);

  sorting$ = this.sortingSubject.asObservable();

  setSorting(criterion: string, searchTerm: string): void {
    this.sortingSubject.next({ criterion, searchTerm });
  }
}
