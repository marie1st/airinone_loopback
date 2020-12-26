<<<<<<< HEAD
import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class SetupCost extends Entity {
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
  cost: number;

  @property({
    type: 'string',
    required: true,
  })
  pipe_size: string;

  @property({
    type: 'string',
    required: true,
  })
  pipe_distance: string;

<<<<<<< HEAD
  @belongsTo(() => OrderProduct, {name: 'orderProduct'})
  order_id: string;

=======
  @property({
    type: 'string',
    required: true,
  })
  order_id: string;


>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  constructor(data?: Partial<SetupCost>) {
    super(data);
  }
}

export interface SetupCostRelations {
  // describe navigational properties here
}

export type SetupCostWithRelations = SetupCost & SetupCostRelations;
