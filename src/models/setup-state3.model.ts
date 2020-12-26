<<<<<<< HEAD
import {Entity, model, property, hasMany} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class SetupState3 extends Entity {
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
  pipe_cover_good: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  sewer_good: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  is_cleanness: boolean;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;

<<<<<<< HEAD
  @hasMany(() => OrderProduct, {keyTo: 'order_id'})
  orderProducts: OrderProduct[];
=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  constructor(data?: Partial<SetupState3>) {
    super(data);
  }
}

export interface SetupState3Relations {
  // describe navigational properties here
}

export type SetupState3WithRelations = SetupState3 & SetupState3Relations;
