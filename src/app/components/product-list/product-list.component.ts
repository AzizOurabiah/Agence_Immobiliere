import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  /*product: object = [
    {
      name: 'Maison sauvage',
      description: 'Joli maison à Montréal',
      sold_price: 1299,
      regular_price: 1999,
    },
    {
      name: 'Maison sauvage',
      description: 'Joli maison à Montréal',
      sold_price: 1299,
      regular_price: 1999,
    },
    {
      name: 'Maison sauvage',
      description: 'Joli maison à Montréal',
      sold_price: 1299,
      regular_price: 1999,
    },
    {
      name: 'Maison sauvage',
      description: 'Joli maison à Montréal',
      sold_price: 1299,
      regular_price: 1999,
    },
    {
      name: 'Maison sauvage',
      description: 'Joli maison à Montréal',
      sold_price: 1299,
      regular_price: 1999,
    },
  ];*/
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
  ngOnInit(): void {}
}
