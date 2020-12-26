<<<<<<< HEAD
import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class SetupFrabicProtect extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'boolean',
  })
  is_good?: boolean;

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
  constructor(data?: Partial<SetupFrabicProtect>) {
    super(data);
  }
}

export interface SetupFrabicProtectRelations {
  // describe navigational properties here
}

export type SetupFrabicProtectWithRelations = SetupFrabicProtect & SetupFrabicProtectRelations;
