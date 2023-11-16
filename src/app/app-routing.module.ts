import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { SeriesDetailsComponent } from './pages/series-details/series-details.component';

const routes: Routes = [
  { path: 'series-list', component: SeriesListComponent},
  {path : 'serie-details/:id', component: SeriesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
