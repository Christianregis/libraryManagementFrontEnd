import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth';
import { User } from '../../core/user.model';

@Component({
  selector: 'app-catalogs',
  imports: [],
  templateUrl: './catalogs.html',
  styleUrl: './catalogs.css',
})
export class Catalogs implements OnInit{

  constructor(private http : HttpClient, private authService: AuthService){}
  user: User | null = null

  goToMePage = "member/me"
  goToEmpruntsPage = "member/borrows"
  goToCatalogesPage = "member"

  logout(){
    this.authService.logout()
  }

  ngOnInit(){
    this.user = this.authService.getUser()
  }
}
