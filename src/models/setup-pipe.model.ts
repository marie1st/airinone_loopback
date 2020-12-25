import {Entity, model, property} from '@loopback/repository';

@model()
export class SetupPipe extends Entity {
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
  pipe_sewer_good: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  pipe_liquid_good: boolean;

  @property({
    type: 'string',
    required: true,
  })
  pipe_gas_size: string;

  @property({
    type: 'string',
    required: true,
  })
  pipe_liquid_size: string;

  @property({
    type: 'string',
    required: true,
  })
  drain_water: string;

  @property({
    type: 'string',
    required: true,
  })
  wire_size: string;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;


  constructor(data?: Partial<SetupPipe>) {
    super(data);
  }
}

export interface SetupPipeRelations {
  // describe navigational properties here
}

export type SetupPipeWithRelations = SetupPipe & SetupPipeRelations;
