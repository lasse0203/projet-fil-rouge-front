
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  private apiUrl = 'http://localhost:8080/api/v1/movies';

  constructor(private http: HttpClient) {}

  getDonnees() {
    this.http.post<any>("http://localhost:8080/api/v1/auth/register", {
      email: "test@email.com",
      password: "password",
      pseudo: "user"
    }).subscribe(data => console.log(data));
    return this.http.get(`${this.apiUrl}/list`);
  }


}
