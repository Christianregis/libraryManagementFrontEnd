import { AdminService } from './../../core/service/admin-service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../core/user.model';
import { AuthService } from '../../core/service/auth';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit{

  user: User | null = null
  getAllUsersCount: any | null = null

  constructor(private authService: AuthService, private adminService: AdminService){}
  usersCount: number = 0
  booksCount = 0;
  categoriesCount = 0;
  borrowsCount = 0;
  
  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.loadStats
  }

    loadStats() {
    this.adminService.getUsersCount().subscribe(res => this.usersCount = res);
    this.adminService.getBooksCount().subscribe(res => this.booksCount = res);
    this.adminService.getBorrowsCount().subscribe(res => this.borrowsCount = res);
  }
}
