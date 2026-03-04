import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  redirectToRegister = 'register' // Page d'inscription

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(){

    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log(this.loginForm.value)

      return;
    }

    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        console.log("Connexion reussie !", data)

      },
      error: (error) => {
        this.error = error.message || 'Login failed';
        this.loading = false;
      }
    });
  }
}
