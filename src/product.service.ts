import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  nouvelleRoute(): string {
    return 'Hello product';
}
}