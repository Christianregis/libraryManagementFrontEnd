import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { AdminService } from '../../core/service/admin-service';
import { AuthService } from '../../core/service/auth';
import { User } from '../../core/user.model';

@Component({
  selector: 'app-borrows',
  imports: [CommonModule],
  templateUrl: './borrows.html',
  styleUrl: './borrows.css',
})
export class Borrows {

  constructor(private adminService: AdminService, private authService: AuthService, private cd: ChangeDetectorRef) { }
  user: User | null = null

  borrows: any[] = []

  logout(){
    this.authService.logout();
  }

  goToHomeAdmin = "admin";
  goToCategoryPage = "admin/categories"
  goToUsersPage = "admin/users"
  goToBooksPage = "admin/books"
  goToBorrowsPage = "admin/borrows"

  getBorrows(){
    this.adminService.getAllBorrows().subscribe(data=>{
      this.borrows = data
      this.cd.detectChanges()
    })
  }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.getBorrows();
  }
}
