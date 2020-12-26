<<<<<<< HEAD
import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class WithdrawMechanicalEquipment extends Entity {
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
  meid: string;

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
  withdraw_amount: string;

  @property({
    type: 'string',
    required: true,
  })
  classifier: string;

  @property({
    type: 'boolean',
    required: true,
  })
  is_approved: boolean;

  @property({
    type: 'string',
    required: true,
  })
  employee_id: string;

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
  constructor(data?: Partial<WithdrawMechanicalEquipment>) {
    super(data);
  }
}

export interface WithdrawMechanicalEquipmentRelations {
  // describe navigational properties here
}

export type WithdrawMechanicalEquipmentWithRelations = WithdrawMechanicalEquipment & WithdrawMechanicalEquipmentRelations;
