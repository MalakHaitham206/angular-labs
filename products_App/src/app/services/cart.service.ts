import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: { product: Product; quantity: number }[] = [];
  private cartSubject = new BehaviorSubject<{ product: Product; quantity: number }[]>(this.cartItems);

  cart$ = this.cartSubject.asObservable(); // Expose cart as an observable

  addToCart(product: Product, quantity: number = 1) {
    const existingItem = this.cartItems.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
    this.cartSubject.next([...this.cartItems]); // Emit the updated cart
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.product.id !== productId);
    this.cartSubject.next([...this.cartItems]); // Emit the updated cart
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find((item) => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.cartSubject.next([...this.cartItems]); // Emit the updated cart
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}