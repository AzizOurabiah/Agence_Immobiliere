import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
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
  SubProducts: Subscription | undefined;
  modalProduct: Product | undefined;

  ok: boolean = false;

  data: Number | undefined;

  displayProduit: boolean = false;
  ngOnInit(): void {
    this.SubProducts = this.produitService.getProduct().subscribe({
      next: (product: Product[]) => {
        this.products = product;
      },
      error: (error) => {
        console.log("Voilà l'erreur " + error);
      },
      complete: () => {
        console.log('The task is compléted ! ');
      },
    });
  }
  handleProduct(product: Product | undefined) {
    this.displayProduit = true;
    this.modalProduct = product;
    console.log(product);
  }
  fermerAffichage() {
    this.displayProduit = false;
  }
  ngOnDestroy(): void {
    this.SubProducts?.unsubscribe();
  }
}
