import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private produitService: ProductService) {
    //this.products = produitService.getProduct;
  }

  message: string = '';
  //productss: string[] = ['a', 'b', 'c', 'd'];
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
  modalProduct: Product | undefined;

  ok: boolean = false;

  displayProduit: boolean = false;
  ngOnInit(): void {
    this.produitService
      .getProduct()
      .then((product: Product[]) => {
        this.products = product;
      })
      .catch((error) => {
        console.log("Voilà l'erreur " + error);
      });
    // this.products = [
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
    //console.log(this.products);
    //this.products = produitService.getProduct;
  }
  // handleDeletProduct(product: Product | undefined) {
  //   this.products = this.products.filter((p) => p._id !== product?._id);
  //   //this.products.length == 0
  //   //this.products[0].product
  //   //delete product;
  //   console.log(product);
  // }
  handleProduct(product: Product | undefined) {
    this.displayProduit = true;
    this.modalProduct = product;
    console.log(product);
  }
  fermerAffichage() {
    this.displayProduit = false;
  }
}
