import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminService } from '../../core/service/admin-service';
import { AuthService } from '../../core/service/auth';
import { User } from '../../core/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit{

  constructor(private adminService: AdminService, private authService: AuthService, private cd: ChangeDetectorRef) { }
  user: User | null = null

  users: any[] = []

  logout(){
    this.authService.logout();
  }

  goToHomeAdmin = "admin";
  goToCategoryPage = "admin/categories"
  goToUsersPage = "admin/users"
  goToBooksPage =  "admin/books";

  getUsers(){
    this.adminService.getUsers().subscribe(data=>{
      this.users = data
      this.cd.detectChanges()
    })
  }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.getUsers();
  }
}
