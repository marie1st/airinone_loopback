<<<<<<< HEAD
import {Entity, model, property, hasMany} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class ProblemReport extends Entity {
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
  name: string;

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

  constructor(data?: Partial<ProblemReport>) {
    super(data);
  }
}

export interface ProblemReportRelations {
  // describe navigational properties here
}

export type ProblemReportWithRelations = ProblemReport & ProblemReportRelations;
