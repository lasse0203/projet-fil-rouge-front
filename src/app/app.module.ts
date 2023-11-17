import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieService } from './service/movie/movie.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { AsideComponent } from './component/aside/aside.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { MovieSortedListComponent } from './component/movie-sorted-list/movie-sorted-list.component';



@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    MovieListComponent,
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    MovieDetailsComponent,
    MovieSortedListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

