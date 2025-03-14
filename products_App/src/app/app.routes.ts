import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-app/products-list/products-list.component';
import { ProductDetailsComponent } from './products-app/product-details/product-details.component';
import { RegisterComponent } from './products-app/auth/register/register.component';
import { LoginComponent } from './products-app/auth/login/login.component';
import { CartComponent } from './products-app/cart/cart.component';
import { NotFoundPageComponent } from './products-app/not-found-page/not-found-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  {
    path: '',
    component: ProductsListComponent,
    title: 'Products',
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product Details',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
    canActivate: [authGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    title: 'Not Found',
  },
];
