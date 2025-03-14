import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../types/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  products: Array<Product> = [];
  private http = inject(HttpClient);
  private router = inject(Router);
  private cartService = inject(CartService);
  currentPage = 1;
  itemsPerPage = 10;
  totalProducts = 0;
  totalPages = 0;

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    const skip = (this.currentPage - 1) * this.itemsPerPage;
    this.http.get<{ products: Product[], total: number }>(`https://dummyjson.com/products?limit=${this.itemsPerPage}&skip=${skip}`)
      .subscribe(response => {
        this.products = response.products;
        this.totalProducts = response.total;
        this.totalPages = Math.ceil(this.totalProducts / this.itemsPerPage);
      });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadProducts();
  }

  handleRedirect(id: number) {
    this.router.navigate(['/products', id]);
  }

  handleAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}