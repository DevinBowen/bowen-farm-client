import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  standalone: true,
  selector: 'app-store',
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  products = [
    { id: 1, name: 'Product 1', price: 10, quantity: 5 },
    { id: 2, name: 'Product 2', price: 20, quantity: 3 },
    { id: 3, name: 'Product 3', price: 30, quantity: 2 },
  ]

  constructor() {

  }

  ngOnInit() {
    // Initialization logic here
  }

}
