import {Entity, model, property} from '@loopback/repository';

@model()
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id: string

  @property({
    type: 'number',
    postgresql: {
      dataType: 'real',
      precision: 2,
      scale: 1
    }
  })
  price: number

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
