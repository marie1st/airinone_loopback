import {Entity, model, property} from '@loopback/repository';

@model()
export class Wage extends Entity {
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
  category: string;

  @property({
    type: 'string',
    required: true,
  })
  btu: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<Wage>) {
    super(data);
  }
}

export interface WageRelations {
  // describe navigational properties here
}

export type WageWithRelations = Wage & WageRelations;
