import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  imports: [FormsModule, ReactiveFormsModule],
  styleUrls: ['./register.css']
})
export class RegisterComponent{
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      prenom: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  redirectToLogin = 'login' // Page de connexion

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(this.registerForm.value).subscribe({
      next: (data) => {
        console.log(data)

        if(data.role == "ADMIN"){
          this.router.navigate(['/login'])
        }
        this.router.navigate(['/login'])
      },
      error: (error) => {
        this.error = error.message || 'Registration failed';
        this.loading = false;
      }
    });
  }
}
