import { Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
//import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductComponent } from './components/product/product.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ContainerComponent,
    pathMatch: 'full',
  },
  {
    path: 'product/:slug',
    component: ProductComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
];
