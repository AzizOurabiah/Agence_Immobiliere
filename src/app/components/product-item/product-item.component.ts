import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  date: Date = new Date();
  data: Number | undefined;
  isLoading: boolean = true;

  //Instruction pour recevoir les données de type Product, de composant parent list vers composant fils item
  @Input() productsss: Product | undefined;

  //Instruction pour envoyer les données de child to parent
  // @Output() public childEvent = new EventEmitter();
  // @Output() deleteProductItem: EventEmitter<Product> =
  //   new EventEmitter<Product>();

  //Variable de type eventEmitter pour envoyer les données au Parent
  @Output() handleProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private produitService: ProductService) {}

  ngOnInit(): void {
    // console.log('------------PRODUCT ITEM-------------------');
    // console.log(this.product?._id);
    //this.deleteProduct(this.product);
    this.produitService.getNumber().subscribe((value) => {
      this.data = value;
    });
  }

  // deletProduct(produit: Product | undefined) {
  //   console.log(produit);
  // }
  // //Méthode pour envoyer les données
  // deleteProduct(product: Product | undefined) {
  //   //On mis un évènement qui peut être écouter dans le composant parent
  //   this.deleteProductItem.emit(product);
  //   //console.log(product);
  // }
  envoieDonneesProduitCliquer(product: Product | undefined) {
    this.handleProduct.emit(product);
  }
}
