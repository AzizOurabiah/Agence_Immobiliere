import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private products = [
  //   {
  //     _id: '1',
  //     name: 'Multiplex (duplex, triplex, quadruplex, quintuplex et plus)',
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
  //     _id: '2',
  //     name: 'maison de type Isolée (unifamiliale, bungalow, à paliers, détachée et cottage)',
  //     description: "Maison de luxe au plein forêt de l'Afrique West",
  //     category: ['Villa', 'Maison', 'Challet'],
  //     imageUrl: [
  //       './assets/images/products/maison_2/1.png',
  //       './assets/images/products/maison_2/2.png',
  //       './assets/images/products/maison_2/3.png',
  //       './assets/images/products/maison_2/4.png',
  //       './assets/images/products/maison_2/5.png',
  //     ],
  //     sold_price: 2599,
  //     regular_price: 3599,
  //     created_at: new Date(),
  //   },
  //   {
  //     _id: '3',
  //     name: 'maison jumelée (semi-détachée)',
  //     description: "Maison de luxe au plein forêt de l'Afrique West",
  //     category: ['Villa', 'Maison', 'Challet'],
  //     imageUrl: [
  //       './assets/images/products/maison_3/1.png',
  //       './assets/images/products/maison_3/2.png',
  //       './assets/images/products/maison_3/3.png',
  //       './assets/images/products/maison_3/4.png',
  //       './assets/images/products/maison_3/5.png',
  //     ],
  //     sold_price: 2599,
  //     regular_price: 3599,
  //     created_at: new Date(),
  //   },
  //   {
  //     _id: '4',
  //     name: 'maison en rangée',
  //     description: "Maison de luxe au plein forêt de l'Afrique West",
  //     category: ['Villa', 'Maison', 'Challet'],
  //     imageUrl: [
  //       './assets/images/products/maison_4/1.png',
  //       './assets/images/products/maison_4/2.png',
  //       './assets/images/products/maison_4/3.png',
  //       './assets/images/products/maison_4/4.png',
  //       './assets/images/products/maison_4/5.png',
  //     ],
  //     sold_price: 2599,
  //     regular_price: 3599,
  //     created_at: new Date(),
  //   },
  //   {
  //     _id: '5',
  //     name: 'maison en rangée sur coin',
  //     description: "Maison de luxe au plein forêt de l'Afrique West",
  //     category: ['Villa', 'Maison', 'Challet'],
  //     imageUrl: [
  //       './assets/images/products/maison_5/1.png',
  //       './assets/images/products/maison_5/2.png',
  //       './assets/images/products/maison_5/3.png',
  //       './assets/images/products/maison_5/4.png',
  //       './assets/images/products/maison_5/5.png',
  //     ],
  //     sold_price: 2599,
  //     regular_price: 3599,
  //     created_at: new Date(),
  //   },
  //   {
  //     _id: '6',
  //     name: 'Triplex (trois logements)',
  //     description: "Maison de luxe au plein forêt de l'Afrique West",
  //     category: ['Villa', 'Maison', 'Challet'],
  //     imageUrl: [
  //       './assets/images/products/maison_6/1.png',
  //       './assets/images/products/maison_6/2.png',
  //       './assets/images/products/maison_6/3.png',
  //       './assets/images/products/maison_6/4.png',
  //       './assets/images/products/maison_6/5.png',
  //     ],
  //     sold_price: 2599,
  //     regular_price: 3599,
  //     created_at: new Date(),
  //   },
  //   {
  //     _id: '7',
  //     name: 'condominium (copropriété, condo et loft)',
  //     description: "Maison de luxe au plein forêt de l'Afrique West",
  //     category: ['Villa', 'Maison', 'Challet'],
  //     imageUrl: [
  //       './assets/images/products/maison_7/1.png',
  //       './assets/images/products/maison_7/2.png',
  //       './assets/images/products/maison_7/3.png',
  //       './assets/images/products/maison_7/4.png',
  //       './assets/images/products/maison_7/5.png',
  //     ],
  //     sold_price: 2599,
  //     regular_price: 3599,
  //     created_at: new Date(),
  //   },
  //   {
  //     _id: '8',
  //     name: 'Maison chalet de luxe',
  //     description: "Maison de luxe au plein forêt de l'Afrique West",
  //     category: ['Villa', 'Maison', 'Challet'],
  //     imageUrl: [
  //       './assets/images/products/maison_8/1.png',
  //       './assets/images/products/maison_8/2.png',
  //       './assets/images/products/maison_8/3.png',
  //       './assets/images/products/maison_8/4.png',
  //       './assets/images/products/maison_8/5.png',
  //     ],
  //     sold_price: 2599,
  //     regular_price: 3599,
  //     created_at: new Date(),
  //   },
  //   {
  //     _id: '9',
  //     name: 'maison à étages',
  //     description: "Maison de luxe au plein forêt de l'Afrique West",
  //     category: ['Villa', 'Maison', 'Challet'],
  //     imageUrl: [
  //       './assets/images/products/maison_9/1.png',
  //       './assets/images/products/maison_9/2.png',
  //       './assets/images/products/maison_9/3.png',
  //       './assets/images/products/maison_9/4.png',
  //       './assets/images/products/maison_9/5.png',
  //     ],
  //     sold_price: 2599,
  //     regular_price: 3599,
  //     created_at: new Date(),
  //   },
  //   {
  //     _id: '10',
  //     name: 'Maison Semi-détaché ou jumelé',
  //     description: "Maison de luxe au plein forêt de l'Afrique West",
  //     category: ['Villa', 'Maison', 'Challet'],
  //     imageUrl: [
  //       './assets/images/products/maison_10/1.png',
  //       './assets/images/products/maison_10/2.png',
  //       './assets/images/products/maison_10/3.png',
  //       './assets/images/products/maison_10/4.png',
  //       './assets/images/products/maison_10/5.png',
  //     ],
  //     sold_price: 2599,
  //     regular_price: 3599,
  //     created_at: new Date(),
  //   },
  // ];
  products: Product[] = [];
  // private urlApi: string = '../assets/api/product.json';
  private urlApi: string = environment.serveurUrl;

  constructor(private httpClient: HttpClient) {}
  /*
  Les méthodes pour utiliser HttpClient sont:
  - get, post, put or putch et delete
  */

  // getProduct() {
  //   return this.products;
  // }
  //On crée une promise pour retourner les données
  getProduct(): Observable<Product[]> {
    // return new Promise((resolve, reject) => {
    //   //On crée notre fonction qu'on veut exécuter
    //   // setTimeout(() => {
    //   //   if (this.products.length) {
    //   //     resolve(this.products);
    //   //   } else {
    //   //     reject("Problème d'affichage des données");
    //   //   }
    //   // }, 1000);
    //   if (this.products.length) {
    //     resolve(this.products);
    //   } else {
    //     reject('Problème de récupération des données !');
    //   }
    // });
    return this.httpClient.get<Product[]>(this.urlApi);
  }
  addProduct() {}
  editProduct(_id: string, product: Product) {
    if (_id == product._id) {
      (product.name = ''),
        (product.category = []),
        (product.description = ''),
        (product.created_at = new Date()),
        (product.imageUrl = []),
        (product.regular_price = 0),
        (product.sold_price = 0);
    }
  }
  deletProduct(_id: string) {}

  getNumber(): Observable<Number> {
    return interval(1000);
  }
}
