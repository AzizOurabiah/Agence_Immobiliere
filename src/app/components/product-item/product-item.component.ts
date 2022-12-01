import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  date: Date = new Date();

  products: Product[] = [
    {
      name: 'maison sauvage',
      description: 'maison au plein forêt',
      imageUrl: '../../assets/images/products/',
      categorie: ['familliale', 'pour couple'],
      sold_price: 2599,
      regular_price: 5999,
      created_at: new Date(),
      update_at: new Date(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
