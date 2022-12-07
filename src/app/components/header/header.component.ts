import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//import { ProductService } from 'src/app/services/product.service';
// import { Product } from '../../models/product';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  // title: string = 'My Shope';
  title: string = environment.siteName;
  data: Number | undefined;
  dataSubscribe: Subscription | undefined;
  constructor() {}
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
