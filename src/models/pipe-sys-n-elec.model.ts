import {Entity, model, property} from '@loopback/repository';

@model()
export class PipeSysNElec extends Entity {
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
  flaring_is_good: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  pipe_size_true: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  wire_true: boolean;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;


  constructor(data?: Partial<PipeSysNElec>) {
    super(data);
  }
}

export interface PipeSysNElecRelations {
  // describe navigational properties here
}

export type PipeSysNElecWithRelations = PipeSysNElec & PipeSysNElecRelations;
