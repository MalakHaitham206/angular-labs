import { Component, input, output, inject } from '@angular/core';
import { Product } from '../../types/product';
import { NgClass, CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  newProduct = input.required<Product>();
  productAddedToCart = output<Product>();
  private cartService = inject(CartService);

  isProductInCart(): boolean {
    return this.cartService.getCartItems().some((item) => item.product.id === this.newProduct().id);
  }

  handleAddToCart(event: Event) {
    event.stopPropagation();
    this.productAddedToCart.emit(this.newProduct());
  }
}