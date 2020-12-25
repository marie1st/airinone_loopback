import {Entity, model, property} from '@loopback/repository';

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

  @property({
    type: 'number',
    required: true,
  })
  premium_setup_id: number;

  @property({
    type: 'number',
    required: true,
  })
  cost: number;

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


  constructor(data?: Partial<ProductNPrice>) {
    super(data);
  }
}

export interface ProductNPriceRelations {
  // describe navigational properties here
}

export type ProductNPriceWithRelations = ProductNPrice & ProductNPriceRelations;
