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


  constructor(data?: Partial<WithdrawMoney>) {
    super(data);
  }
}

export interface WithdrawMoneyRelations {
  // describe navigational properties here
}

export type WithdrawMoneyWithRelations = WithdrawMoney & WithdrawMoneyRelations;
