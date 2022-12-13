import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  //@Input() productss: Product | undefined;

  slug: string | undefined;
  product: Product | undefined;
  productSub: Subscription | undefined;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.productSub = this.productService.getProduct().subscribe({
      next: (products: Product[]) => {
        this.product = products.filter((p) => p.slug === this.slug)[0];
        this.isLoading = false;
      },
      error: (error: any) => {
        console.log("Voilà l'erreur ", error);
        this.isLoading = true;
      },
    });

    //console.log(this.slug);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.productSub?.unsubscribe;
  }
}
