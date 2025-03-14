import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../types/product';
import { CommonModule, NgClass } from '@angular/common';
import { DiscountPricePipe } from '../discount-price.pipe.spec';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, NgClass, DiscountPricePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  product: Product | undefined;

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.http.get<Product>(`https://dummyjson.com/products/${productId}`)
        .subscribe(response => {
          this.product = response;
        });
    }
  }
}