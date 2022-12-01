import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  productss: string[] = ['a', 'b', 'c', 'd'];
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
  products: Product[] = [];
  //i: number = this.products?.length;
  // products: Product[] = [
  //   {
  //     name: 'maison sauvage',
  //     description: 'maison au plein forêt',
  //     imageUrl: '../../assets/images/products/',
  //     categorie: ['familliale', 'pour couple'],
  //     sold_price: 2599,
  //     regular_price: 5999,
  //     created_at: new Date(),
  //     update_at: new Date(),
  //   },
  // ];
  ngOnInit(): void {
    this.products = [
      {
        _id: '123456789',
        name: 'Maison de luxe',
        description: "Maison de luxe au plein forêt de l'Afrique West",
        category: ['Villa', 'Maison', 'Challet'],
        imageUrl: [
          './assets/images/products/maison_1/1.png',
          './assets/images/products/maison_1/2.png',
          './assets/images/products/maison_1/3.png',
          './assets/images/products/maison_1/4.png',
          './assets/images/products/maison_1/5.png',
        ],
        sold_price: 2599,
        regular_price: 3599,
        created_at: new Date(),
      },
      {
        _id: '22222222',
        name: 'Maison de luxe',
        description: "Maison de luxe au plein forêt de l'Afrique West",
        category: ['Villa', 'Maison', 'Challet'],
        imageUrl: [
          './assets/images/products/maison_2/1.png',
          './assets/images/products/maison_2/2.png',
          './assets/images/products/maison_2/3.png',
          './assets/images/products/maison_2/4.png',
          './assets/images/products/maison_2/5.png',
        ],
        sold_price: 2599,
        regular_price: 3599,
        created_at: new Date(),
      },
      {
        _id: '123456789',
        name: 'Maison de luxe',
        description: "Maison de luxe au plein forêt de l'Afrique West",
        category: ['Villa', 'Maison', 'Challet'],
        imageUrl: [
          './assets/images/products/maison_3/1.png',
          './assets/images/products/maison_3/2.png',
          './assets/images/products/maison_3/3.png',
          './assets/images/products/maison_3/4.png',
          './assets/images/products/maison_3/5.png',
        ],
        sold_price: 2599,
        regular_price: 3599,
        created_at: new Date(),
      },
      {
        _id: '123456789',
        name: 'Maison de luxe',
        description: "Maison de luxe au plein forêt de l'Afrique West",
        category: ['Villa', 'Maison', 'Challet'],
        imageUrl: [
          './assets/images/products/maison_4/1.png',
          './assets/images/products/maison_4/2.png',
          './assets/images/products/maison_4/3.png',
          './assets/images/products/maison_4/4.png',
          './assets/images/products/maison_4/5.png',
        ],
        sold_price: 2599,
        regular_price: 3599,
        created_at: new Date(),
      },
      {
        _id: '123456789',
        name: 'Maison de luxe',
        description: "Maison de luxe au plein forêt de l'Afrique West",
        category: ['Villa', 'Maison', 'Challet'],
        imageUrl: [
          './assets/images/products/maison_5/1.png',
          './assets/images/products/maison_5/2.png',
          './assets/images/products/maison_5/3.png',
          './assets/images/products/maison_5/4.png',
          './assets/images/products/maison_5/5.png',
        ],
        sold_price: 2599,
        regular_price: 3599,
        created_at: new Date(),
      },
      {
        _id: '123456789',
        name: 'Maison de luxe',
        description: "Maison de luxe au plein forêt de l'Afrique West",
        category: ['Villa', 'Maison', 'Challet'],
        imageUrl: [
          './assets/images/products/maison_6/1.png',
          './assets/images/products/maison_6/2.png',
          './assets/images/products/maison_6/3.png',
          './assets/images/products/maison_6/4.png',
          './assets/images/products/maison_6/5.png',
        ],
        sold_price: 2599,
        regular_price: 3599,
        created_at: new Date(),
      },
      {
        _id: '123456789',
        name: 'Maison de luxe',
        description: "Maison de luxe au plein forêt de l'Afrique West",
        category: ['Villa', 'Maison', 'Challet'],
        imageUrl: [
          './assets/images/products/maison_7/1.png',
          './assets/images/products/maison_7/2.png',
          './assets/images/products/maison_7/3.png',
          './assets/images/products/maison_7/4.png',
          './assets/images/products/maison_7/5.png',
        ],
        sold_price: 2599,
        regular_price: 3599,
        created_at: new Date(),
      },
      {
        _id: '123456789',
        name: 'Maison de luxe',
        description: "Maison de luxe au plein forêt de l'Afrique West",
        category: ['Villa', 'Maison', 'Challet'],
        imageUrl: [
          './assets/images/products/maison_8/1.png',
          './assets/images/products/maison_8/2.png',
          './assets/images/products/maison_8/3.png',
          './assets/images/products/maison_8/4.png',
          './assets/images/products/maison_8/5.png',
        ],
        sold_price: 2599,
        regular_price: 3599,
        created_at: new Date(),
      },
      {
        _id: '123456789',
        name: 'Maison de luxe',
        description: "Maison de luxe au plein forêt de l'Afrique West",
        category: ['Villa', 'Maison', 'Challet'],
        imageUrl: [
          './assets/images/products/maison_9/1.png',
          './assets/images/products/maison_9/2.png',
          './assets/images/products/maison_9/3.png',
          './assets/images/products/maison_9/4.png',
          './assets/images/products/maison_9/5.png',
        ],
        sold_price: 2599,
        regular_price: 3599,
        created_at: new Date(),
      },
      {
        _id: '123456789',
        name: 'Maison de luxe',
        description: "Maison de luxe au plein forêt de l'Afrique West",
        category: ['Villa', 'Maison', 'Challet'],
        imageUrl: [
          './assets/images/products/maison_10/1.png',
          './assets/images/products/maison_10/2.png',
          './assets/images/products/maison_10/3.png',
          './assets/images/products/maison_10/4.png',
          './assets/images/products/maison_10/5.png',
        ],
        sold_price: 2599,
        regular_price: 3599,
        created_at: new Date(),
      },
    ];
    console.log(this.products);
  }
}
