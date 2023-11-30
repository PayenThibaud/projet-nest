import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  nouvelleRoute(): string[] {
    let table: string[] = ['article 1', "article 2", "article 3"];
    return table;
}
}