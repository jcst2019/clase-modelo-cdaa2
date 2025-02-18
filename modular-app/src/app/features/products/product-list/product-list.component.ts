import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = [
    { name: 'Laptop', category: 'Electrónica', quantity: 10, price: 1500 },
    { name: 'Celular', category: 'Electrónica', quantity: 20, price: 800 },
    { name: 'Teclado', category: 'Accesorios', quantity: 50, price: 40 }
  ];
  
}
