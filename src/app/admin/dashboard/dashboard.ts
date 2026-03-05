import { AdminService } from './../../core/service/admin-service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../../core/user.model';
import { AuthService } from '../../core/service/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {

  user: User | null = null
  getAllUsersCount: any | null = null

  constructor(private authService: AuthService, private adminService: AdminService, private cd: ChangeDetectorRef) { }
  usersCount: number = 0
  booksCount = 0;
  categoriesCount = 0;
  borrowsCount = 0;
  users: any[] = []
  books: any[] = []

  goToHomeAdmin = "admin";
  goToCategoryPage = "admin/categories"
  goToUsersPage = "admin/users"
  goToBooksPage = "admin/books";
  goToBorrowsPage = "admin/borrows"

  logout() {
    this.authService.logout()
  }

  getUsers() {
    this.adminService.getUsers().subscribe(data => {
      this.users = data
      this.cd.detectChanges()
    })
  }

  getBooks() {
    this.adminService.getAllBooks().subscribe(data => {
      this.books = data;
      this.cd.detectChanges()
    })
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.loadStats();
    this.getUsers();
    this.getBooks();
  }

  loadStats() {
    this.adminService.getUsersCount().subscribe(res => { this.usersCount = res; this.cd.detectChanges() });
    this.adminService.getBooksCount().subscribe(res => (this.booksCount = res, this.cd.detectChanges()));
    this.adminService.getCategoriesCount().subscribe(res => { this.categoriesCount = res; this.cd.detectChanges() });
    this.adminService.getBorrowsCount().subscribe(res => { this.borrowsCount = res; this.cd.detectChanges() });
  }
}
