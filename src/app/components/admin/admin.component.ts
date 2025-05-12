import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { TopNavComponent } from "../../shared/components/top-nav/top-nav.component"
import { AuthService } from '../../services/auth.service'
import { Credentials } from '../../types/auth'

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TopNavComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  credentials: Credentials = {}

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    // Initialization logic here
  }

  create() {
    if (this.credentials.email && this.credentials.password && this.credentials.firstName && this.credentials.lastName) {
      this.authService.create(this.credentials).subscribe(
        (response) => {
          console.log('User created successfully:', response)
          // Handle success, e.g., navigate to another page or show a success message
        },
        (error) => {
          console.error('Error creating user:', error)
          // Handle error, e.g., show an error message
        }
      )
    }
  }

}
