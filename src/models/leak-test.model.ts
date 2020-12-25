import {Entity, model, property} from '@loopback/repository';

@model()
export class LeakTest extends Entity {
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
  is_pass: boolean;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;


  constructor(data?: Partial<LeakTest>) {
    super(data);
  }
}

export interface LeakTestRelations {
  // describe navigational properties here
}

export type LeakTestWithRelations = LeakTest & LeakTestRelations;
