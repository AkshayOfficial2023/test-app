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
    const PRODUCT = new Product();
    PRODUCT.price = product.price
    PRODUCT.id = product.id
    this.productRepo.create(PRODUCT).then(data => {
      console.log(data);

      return 'Success'
    })
  }
}
