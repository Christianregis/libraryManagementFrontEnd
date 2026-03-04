import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) { }

  getUsersCount(): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/users/count`)
  }

  getBooksCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/books/count`);
  }

  getCategoriesCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/categories/count`);
  }

  getBorrowsCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/borrows/count`);
  }

}
