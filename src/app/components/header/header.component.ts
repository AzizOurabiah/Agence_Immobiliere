import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
// import { Product } from '../../models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string = 'My Shope';
  data: Number | undefined;
  dataSubscribe: Subscription | undefined;
  constructor(/*private produitService: ProductService*/) {}
  ngOnDestroy(): void {
    this.dataSubscribe?.unsubscribe();
  }

  // products: Product[] = [];

  ngOnInit(): void {
    // this.dataSubscribe = this.produitService.getNumber().subscribe({
    //   next: (value: any) => {
    //     this.data = value;
    //   },
    //   error: (error: any) => {
    //     console.log("Voila la valeur d'erreur !" + error);
    //   },
    //   complete: () => {
    //     console.log('Action completd ! ');
    //   },
    // });
  }
}
