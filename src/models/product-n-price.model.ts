<<<<<<< HEAD
import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Wage} from './wage.model';
import {ItemPrice} from './item-price.model';
import {PremiumSetupCost} from './premium-setup-cost.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class ProductNPrice extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;

  @property({
    type: 'string',
    required: true,
  })
  btu: string;

  @property({
    type: 'number',
    required: true,
  })
  selling_price: number;

  @property({
    type: 'number',
    required: true,
  })
  promotion_id: number;
<<<<<<< HEAD
=======

  @property({
    type: 'number',
    required: true,
  })
  premium_setup_id: number;

>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  @property({
    type: 'number',
    required: true,
  })
  cost: number;
<<<<<<< HEAD
=======

  @property({
    type: 'number',
    required: true,
  })
  wage_id: number;

  @property({
    type: 'number',
    required: true,
  })
  item_price_id: number;

>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  @property({
    type: 'number',
    required: true,
  })
  other_cost: number;

  @property({
    type: 'number',
    required: true,
  })
  total_cost: number;

  @property({
    type: 'number',
    required: true,
  })
  profit: number;

  @property({
    type: 'number',
    required: true,
  })
  profit_percent: number;

<<<<<<< HEAD
  @belongsTo(() => Wage, {name: 'Wage'})
  wage_id: number;

  @belongsTo(() => ItemPrice, {name: 'ItemPrice'})
  item_price_id: number;

  @belongsTo(() => PremiumSetupCost, {name: 'PremiiumSetupCost'})
  premium_setup_id: number;
=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  constructor(data?: Partial<ProductNPrice>) {
    super(data);
  }
}

export interface ProductNPriceRelations {
  // describe navigational properties here
}

export type ProductNPriceWithRelations = ProductNPrice & ProductNPriceRelations;
