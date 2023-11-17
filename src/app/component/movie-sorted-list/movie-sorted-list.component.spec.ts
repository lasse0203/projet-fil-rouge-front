import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSortedListComponent } from './movie-sorted-list.component';

describe('MovieSortedListComponent', () => {
  let component: MovieSortedListComponent;
  let fixture: ComponentFixture<MovieSortedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSortedListComponent]
    });
    fixture = TestBed.createComponent(MovieSortedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
