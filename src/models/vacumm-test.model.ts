import {Entity, model, property} from '@loopback/repository';

@model()
export class VacummTest extends Entity {
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


  constructor(data?: Partial<VacummTest>) {
    super(data);
  }
}

export interface VacummTestRelations {
  // describe navigational properties here
}

export type VacummTestWithRelations = VacummTest & VacummTestRelations;
