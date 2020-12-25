import {Entity, model, property} from '@loopback/repository';

@model()
export class WithdrawUsedEquipment extends Entity {
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
  ueid: string;

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
    type: 'number',
    required: true,
  })
  withdraw_amount: number;

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

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;


  constructor(data?: Partial<WithdrawUsedEquipment>) {
    super(data);
  }
}

export interface WithdrawUsedEquipmentRelations {
  // describe navigational properties here
}

export type WithdrawUsedEquipmentWithRelations = WithdrawUsedEquipment & WithdrawUsedEquipmentRelations;
