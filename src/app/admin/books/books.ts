import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { AdminService } from '../../core/service/admin-service';
import { AuthService } from '../../core/service/auth';
import { User } from '../../core/user.model';

@Component({
  selector: 'app-books',
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  constructor(private adminService: AdminService, private authService: AuthService, private cd: ChangeDetectorRef) { }
  user: User | null = null

  books: any[] = []

  logout(){
    this.authService.logout();
  }

  goToHomeAdmin = "admin";
  goToCategoryPage = "admin/categories"
  goToUsersPage = "admin/users"
  goToBooksPage = "admin/books"
  goToBorrowsPage = "admin/borrows"

  getBooks(){
    this.adminService.getAllBooks().subscribe(data=>{
      this.books = data
      this.cd.detectChanges()
    })
  }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.getBooks();
  }
}
