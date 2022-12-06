//import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-product-view',
  templateUrl: './modal-product-view.component.html',
  styleUrls: ['./modal-product-view.component.css'],
})
export class ModalProductViewComponent implements OnInit {
  @Input() productss: Product | undefined;

  @Output() isDisplayModal: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  afficherProduit(produit: Product | undefined) {
    this.productss = produit;
    console.log(produit);
  }
  fermerAffichage() {
    this.isDisplayModal.emit();
  }
}
