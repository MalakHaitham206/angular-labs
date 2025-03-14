import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../types/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private cartService = inject(CartService);
  cart: { product: Product; quantity: number }[] = [];

  constructor() {
    // Subscribe to cart changes
    this.cartService.cart$.subscribe((cart) => {
      this.cart = cart;
    });
  }

  updateQuantity(productId: number, change: number): void {
    const item = this.cart.find((item) => item.product.id === productId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0 && newQuantity <= item.product.stock) {
        this.cartService.updateQuantity(productId, newQuantity);
      }
    }
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}