import { AuthService } from './../../core/service/auth';
import { AdminService } from './../../core/service/admin-service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../../core/user.model';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {

  constructor(private adminService: AdminService, private authService: AuthService, private cd: ChangeDetectorRef) { }
  user: User | null = null

  categories: any[] = []

  logout(){
    this.authService.logout();
  }

  goToHomeAdmin = "admin";
  goToCategoryPage = "admin/categories"
  goToUsersPage = "admin/users"
  goToBooksPage =  "admin/books";
    goToBorrowsPage = "admin/borrows"

  getCategories(){
    this.adminService.getAllCategories().subscribe(data=>{
      this.categories = data
      this.cd.detectChanges()
    })
  }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.getCategories();
  }
}
