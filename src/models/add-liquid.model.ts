<<<<<<< HEAD
import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class AddLiquid extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  liquid_to_sys: number;

  @property({
    type: 'boolean',
    required: true,
  })
  is_pass: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  is_standard: boolean;

<<<<<<< HEAD
  @belongsTo(() => OrderProduct, {name: 'OrderProduct'})
  order_id: string;

=======
  @property({
    type: 'string',
    required: true,
  })
  order_id: string;


>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  constructor(data?: Partial<AddLiquid>) {
    super(data);
  }
}

export interface AddLiquidRelations {
  // describe navigational properties here
}

export type AddLiquidWithRelations = AddLiquid & AddLiquidRelations;
