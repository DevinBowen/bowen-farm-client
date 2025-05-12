import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common'

import { AuthService } from '../../../services/auth.service'
import { Credentials } from '../../../types/auth'

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials: Credentials = {}
  missingCredentials: boolean = false

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  login() {
    if (this.credentials.email && this.credentials.password) {
      this.authService.login(this.credentials).subscribe({
        next: (response) => {
          console.log('Login successful')
          console.log(response)
          this.router.navigate(['/home'])
        },
        error: (error) => {
          console.error('Login failed', error)
          // Handle login error, e.g., show an error message
        }
      })
    } else {
      console.error('Email and password are required')
      this.missingCredentials = true;
    }
  }

  register() {
    console.log('Register clicked')
  }
}
