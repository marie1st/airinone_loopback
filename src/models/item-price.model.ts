<<<<<<< HEAD
import {Entity, model, property, hasOne} from '@loopback/repository';
import {ProductNPrice} from './product-n-price.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class ItemPrice extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'string',
    required: true,
  })
  btu: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

<<<<<<< HEAD
  @hasOne(() => ProductNPrice, {keyTo: 'item_price_id'})
  productNPrice: ProductNPrice;
=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  constructor(data?: Partial<ItemPrice>) {
    super(data);
  }
}

export interface ItemPriceRelations {
  // describe navigational properties here
}

export type ItemPriceWithRelations = ItemPrice & ItemPriceRelations;
