<<<<<<< HEAD
import {Entity, model, property, hasOne} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class State4Info extends Entity {
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
  model: string;

  @property({
    type: 'string',
    required: true,
  })
  serial: string;

  @property({
    type: 'date',
    required: true,
  })
  warranty: string;

  @property({
    type: 'date',
    required: true,
  })
  clean_air_con: string;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;

<<<<<<< HEAD
  @hasOne(() => OrderProduct, {keyTo: 'order_id'})
  orderProduct: OrderProduct;
=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  constructor(data?: Partial<State4Info>) {
    super(data);
  }
}

export interface State4InfoRelations {
  // describe navigational properties here
}

export type State4InfoWithRelations = State4Info & State4InfoRelations;
