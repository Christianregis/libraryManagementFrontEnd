import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http:HttpClient){}

  login(credidentials: any) : Observable<any>{
      return this.http.post(`${this.baseUrl}/login`, credidentials);
  }

  private currentUser: User | null = null
  setUser(rawData: any){
    const user: User = {
      id: rawData.id,
      name: rawData.name,
      surname: rawData.surname,
      email: rawData.email,
      role: rawData.role
    }
    this.currentUser = user
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser(): User | null{
    if(!this.currentUser){
      const savedUser = localStorage.getItem('user');
      if(savedUser) this.currentUser = JSON.parse(savedUser)
    }

    return this.currentUser
  }
  private credentials: string | null = null
  setCredentials(email: string, password:string){
    this.credentials = `${email}:${password}`
    localStorage.setItem('credentials', this.credentials)
  }

  getCredentials(): string | null{
    const credentials = localStorage.getItem('credentials')
    return credentials
  }

  logout(){
    localStorage.clear()
  }

  register(credidentials: any) : Observable<any>{
    return this.http.post(`${this.baseUrl}/register`, credidentials)
  }
}
