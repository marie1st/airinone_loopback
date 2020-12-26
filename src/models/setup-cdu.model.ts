<<<<<<< HEAD
import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class SetupCdu extends Entity {
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
  cdu_cover: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  cdu_filter: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  hotcoil_frame: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  coolcoil_cleanness: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  hotcoil_cleanness: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  is_cool: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  is_balance: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  is_strong: boolean;

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
  constructor(data?: Partial<SetupCdu>) {
    super(data);
  }
}

export interface SetupCduRelations {
  // describe navigational properties here
}

export type SetupCduWithRelations = SetupCdu & SetupCduRelations;
