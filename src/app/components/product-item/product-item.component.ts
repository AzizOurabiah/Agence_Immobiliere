import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  date: Date = new Date();

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

  //Instruction pour recevoir les données de type Product, de composant parent list vers composant fils item
  @Input() product: Product | undefined;

  //Instruction pour envoyer les données de child to parent
  // @Output() public childEvent = new EventEmitter();
  @Output() deleteProductItem: EventEmitter<Product> =
    new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {
    // console.log('------------PRODUCT ITEM-------------------');
    // console.log(this.product?._id);
    //this.deleteProduct(this.product);
  }

  // deletProduct(produit: Product | undefined) {
  //   console.log(produit);
  // }
  //Méthode pour envoyer les données
  deleteProduct(product: Product | undefined) {
    //On mis un évènement qui peut être écouter dans le composant parent
    this.deleteProductItem.emit(product);
    //console.log(product);
  }
}
