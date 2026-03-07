import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberService {

  constructor(private http: HttpClient){}

  private baseUrl = 'http://localhost:8080/api/member';

  getAllBooks(){
    return this.http.get(`${this.baseUrl}/books`)
  }

  getAllCategories(){
    return this.http.get(`${this.baseUrl}/categories`)
  }
}
