<<<<<<< HEAD
import {belongsTo, Entity, model, property} from '@loopback/repository';
import {OrderProduct} from './order-product.model';

@model()
export class WithdrawMoney extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
    required: true,
  })
  id: Number;
=======
import {Entity, model, property} from '@loopback/repository';

@model()
export class WithdrawMoney extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  order_id: string;
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    required: true,
  })
  amount_of_money: number;

  @property({
    type: 'boolean',
    required: true,
  })
  is_approved: boolean;

<<<<<<< HEAD
  @belongsTo(() => OrderProduct, {name: 'OrderProduct'})
  order_id: string;
=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  constructor(data?: Partial<WithdrawMoney>) {
    super(data);
  }
}

export interface WithdrawMoneyRelations {
  // describe navigational properties here
}

export type WithdrawMoneyWithRelations = WithdrawMoney & WithdrawMoneyRelations;
