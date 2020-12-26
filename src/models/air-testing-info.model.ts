<<<<<<< HEAD
import {Entity, model, property, hasMany} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class AirTestingInfo extends Entity {
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
  remote_temp: number;

  @property({
    type: 'number',
    required: true,
  })
  fcu_temp_back: number;

  @property({
    type: 'number',
    required: true,
  })
  pipe_temp_back: number;

  @property({
    type: 'number',
    required: true,
  })
  elec_current: number;

  @property({
    type: 'number',
    required: true,
  })
  cdu_temp_back: number;

  @property({
    type: 'number',
    required: true,
  })
  liquid_pressure_back: number;

  @property({
    type: 'number',
    required: true,
  })
  phy_temp: number;

  @property({
    type: 'number',
    required: true,
  })
  fcu_temp_out: number;

  @property({
    type: 'number',
    required: true,
  })
  pipe_temp_out: number;

  @property({
    type: 'number',
    required: true,
  })
  elec_volt: number;

  @property({
    type: 'number',
    required: true,
  })
  cdu_temp_out: number;

  @property({
    type: 'number',
    required: true,
  })
  liquid_pressure_out: number;

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

  constructor(data?: Partial<AirTestingInfo>) {
    super(data);
  }
}

export interface AirTestingInfoRelations {
  // describe navigational properties here
}

export type AirTestingInfoWithRelations = AirTestingInfo & AirTestingInfoRelations;
