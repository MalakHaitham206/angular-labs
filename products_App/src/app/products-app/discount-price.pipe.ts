
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPrice', // Ensure the name matches what you use in the template
})
export class DiscountPricePipe implements PipeTransform {
  transform(price: number, discountPercentage: number): number {
    if (!discountPercentage || discountPercentage <= 0) {
      return price;
    }
    const discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
  }
}