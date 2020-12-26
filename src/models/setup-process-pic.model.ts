<<<<<<< HEAD
import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
import {SetupProcess} from './setup-process.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class SetupProcessPic extends Entity {
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
  pic: string;
<<<<<<< HEAD
  @belongsTo(() => OrderProduct, {name: 'OrderProduct'})
  order_id: string;

  @belongsTo(() => SetupProcess, {name: 'SetupProcess'})
  setup_process_id: number;

=======

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;

  @property({
    type: 'number',
    required: true,
  })
  setup_process_id: number;


>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  constructor(data?: Partial<SetupProcessPic>) {
    super(data);
  }
}

export interface SetupProcessPicRelations {
  // describe navigational properties here
}

export type SetupProcessPicWithRelations = SetupProcessPic & SetupProcessPicRelations;
