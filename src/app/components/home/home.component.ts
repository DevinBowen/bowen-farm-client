import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from '../../shared/components/top-nav/top-nav.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    TopNavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
