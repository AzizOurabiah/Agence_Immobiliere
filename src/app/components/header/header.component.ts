import { Component, OnInit } from '@angular/core';
// import { Product } from '../../models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'My Shope';
  constructor() {}

  // products: Product[] = [];

  ngOnInit(): void {
    // this.products = [
    //   {
    //     _id: '123456789',
    //     name: 'Maison de luxe',
    //     description: "Maison de luxe au plein forêt de l'Afrique West",
    //     category: ['Villa', 'Maison', 'Challet'],
    //     imageUrl: [
    //       './assets/images/products/maison_1/1.png',
    //       './assets/images/products/maison_1/2.png',
    //       './assets/images/products/maison_1/3.png',
    //       './assets/images/products/maison_1/4.png',
    //       './assets/images/products/maison_1/5.png',
    //     ],
    //     sold_price: 2599,
    //     regular_price: 3599,
    //     created_at: new Date(),
    //   },
    //   {
    //     _id: '123456789',
    //     name: 'Maison de luxe',
    //     description: "Maison de luxe au plein forêt de l'Afrique West",
    //     category: ['Villa', 'Maison', 'Challet'],
    //     imageUrl: [
    //       './assets/images/products/maison_1/1.png',
    //       './assets/images/products/maison_1/2.png',
    //       './assets/images/products/maison_1/3.png',
    //       './assets/images/products/maison_1/4.png',
    //       './assets/images/products/maison_1/5.png',
    //     ],
    //     sold_price: 2599,
    //     regular_price: 3599,
    //     created_at: new Date(),
    //   },
    //   {
    //     _id: '123456789',
    //     name: 'Maison de luxe',
    //     description: "Maison de luxe au plein forêt de l'Afrique West",
    //     category: ['Villa', 'Maison', 'Challet'],
    //     imageUrl: [
    //       './assets/images/products/maison_1/1.png',
    //       './assets/images/products/maison_1/2.png',
    //       './assets/images/products/maison_1/3.png',
    //       './assets/images/products/maison_1/4.png',
    //       './assets/images/products/maison_1/5.png',
    //     ],
    //     sold_price: 2599,
    //     regular_price: 3599,
    //     created_at: new Date(),
    //   },
    //   {
    //     _id: '123456789',
    //     name: 'Maison de luxe',
    //     description: "Maison de luxe au plein forêt de l'Afrique West",
    //     category: ['Villa', 'Maison', 'Challet'],
    //     imageUrl: [
    //       './assets/images/products/maison_1/1.png',
    //       './assets/images/products/maison_1/2.png',
    //       './assets/images/products/maison_1/3.png',
    //       './assets/images/products/maison_1/4.png',
    //       './assets/images/products/maison_1/5.png',
    //     ],
    //     sold_price: 2599,
    //     regular_price: 3599,
    //     created_at: new Date(),
    //   },
    //   {
    //     _id: '123456789',
    //     name: 'Maison de luxe',
    //     description: "Maison de luxe au plein forêt de l'Afrique West",
    //     category: ['Villa', 'Maison', 'Challet'],
    //     imageUrl: [
    //       './assets/images/products/maison_1/1.png',
    //       './assets/images/products/maison_1/2.png',
    //       './assets/images/products/maison_1/3.png',
    //       './assets/images/products/maison_1/4.png',
    //       './assets/images/products/maison_1/5.png',
    //     ],
    //     sold_price: 2599,
    //     regular_price: 3599,
    //     created_at: new Date(),
    //   },
    //   {
    //     _id: '123456789',
    //     name: 'Maison de luxe',
    //     description: "Maison de luxe au plein forêt de l'Afrique West",
    //     category: ['Villa', 'Maison', 'Challet'],
    //     imageUrl: [
    //       './assets/images/products/maison_1/1.png',
    //       './assets/images/products/maison_1/2.png',
    //       './assets/images/products/maison_1/3.png',
    //       './assets/images/products/maison_1/4.png',
    //       './assets/images/products/maison_1/5.png',
    //     ],
    //     sold_price: 2599,
    //     regular_price: 3599,
    //     created_at: new Date(),
    //   },
    //   {
    //     _id: '123456789',
    //     name: 'Maison de luxe',
    //     description: "Maison de luxe au plein forêt de l'Afrique West",
    //     category: ['Villa', 'Maison', 'Challet'],
    //     imageUrl: [
    //       './assets/images/products/maison_1/1.png',
    //       './assets/images/products/maison_1/2.png',
    //       './assets/images/products/maison_1/3.png',
    //       './assets/images/products/maison_1/4.png',
    //       './assets/images/products/maison_1/5.png',
    //     ],
    //     sold_price: 2599,
    //     regular_price: 3599,
    //     created_at: new Date(),
    //   },
    //   {
    //     _id: '123456789',
    //     name: 'Maison de luxe',
    //     description: "Maison de luxe au plein forêt de l'Afrique West",
    //     category: ['Villa', 'Maison', 'Challet'],
    //     imageUrl: [
    //       './assets/images/products/maison_1/1.png',
    //       './assets/images/products/maison_1/2.png',
    //       './assets/images/products/maison_1/3.png',
    //       './assets/images/products/maison_1/4.png',
    //       './assets/images/products/maison_1/5.png',
    //     ],
    //     sold_price: 2599,
    //     regular_price: 3599,
    //     created_at: new Date(),
    //   },
    //   {
    //     _id: '123456789',
    //     name: 'Maison de luxe',
    //     description: "Maison de luxe au plein forêt de l'Afrique West",
    //     category: ['Villa', 'Maison', 'Challet'],
    //     imageUrl: [
    //       './assets/images/products/maison_1/1.png',
    //       './assets/images/products/maison_1/2.png',
    //       './assets/images/products/maison_1/3.png',
    //       './assets/images/products/maison_1/4.png',
    //       './assets/images/products/maison_1/5.png',
    //     ],
    //     sold_price: 2599,
    //     regular_price: 3599,
    //     created_at: new Date(),
    //   },
    //   {
    //     _id: '123456789',
    //     name: 'Maison de luxe',
    //     description: "Maison de luxe au plein forêt de l'Afrique West",
    //     category: ['Villa', 'Maison', 'Challet'],
    //     imageUrl: [
    //       './assets/images/products/maison_1/1.png',
    //       './assets/images/products/maison_1/2.png',
    //       './assets/images/products/maison_1/3.png',
    //       './assets/images/products/maison_1/4.png',
    //       './assets/images/products/maison_1/5.png',
    //     ],
    //     sold_price: 2599,
    //     regular_price: 3599,
    //     created_at: new Date(),
    //   },
    // ];
    // console.log(this.products);
  }
}
