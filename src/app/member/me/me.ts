import { Component, OnInit } from '@angular/core';
import { User } from '../../core/user.model';
import { AuthService } from '../../core/service/auth';

@Component({
  selector: 'app-me',
  imports: [],
  templateUrl: './me.html',
  styleUrl: './me.css',
})
export class MeComponent implements OnInit {
  user: User | null = null

  constructor(private authService: AuthService) { }

  goToMePage = "member/me"
  goToEmpruntsPage = "member/borrows"
  goToCatalogesPage = "member"

  logout() {
    this.authService.logout()
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
  }
}
