// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {post, requestBody} from '@loopback/rest';
import {Product} from '../models';
import {ProductRepository} from '../repositories';

// import {inject} from '@loopback/core';


export class ProductController {
  constructor(@repository(ProductRepository)
  private productRepo: ProductRepository) { }

  @post('/product')
  async post(
    @requestBody() product: Product
  ) {
    const PRODUCT = new Product()
    PRODUCT.id = product.id
    PRODUCT.price = product.price
    const p = await this.productRepo.create(PRODUCT)
    return p
  }
}
