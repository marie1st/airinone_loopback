<<<<<<< HEAD
import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class PipeSysNElec extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'boolean',
    required: true,
  })
  flaring_is_good: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  pipe_size_true: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  wire_true: boolean;

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
  constructor(data?: Partial<PipeSysNElec>) {
    super(data);
  }
}

export interface PipeSysNElecRelations {
  // describe navigational properties here
}

export type PipeSysNElecWithRelations = PipeSysNElec & PipeSysNElecRelations;
