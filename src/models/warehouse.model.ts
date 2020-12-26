import {Entity, model, property} from '@loopback/repository';

@model()
export class Warehouse extends Entity {
  @property({
<<<<<<< HEAD
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;
=======
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

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
  classifier: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'number',
    required: true,
  })
  btu: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'date',
  })
  created_at?: string;


  constructor(data?: Partial<Warehouse>) {
    super(data);
  }
}

export interface WarehouseRelations {
  // describe navigational properties here
}

export type WarehouseWithRelations = Warehouse & WarehouseRelations;
