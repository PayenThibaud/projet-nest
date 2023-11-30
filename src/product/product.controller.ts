import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller("Product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  nouvelle(): string[] {
    return this.productService.nouvelleRoute();
  }
}
