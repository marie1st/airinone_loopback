import {Entity, model, property} from '@loopback/repository';

@model()
export class SetupFcu extends Entity {
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
  fcu_cover: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  fcu_filter: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  hotcoil_frame: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  coolcoil_clean: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  hotcoil_clean: boolean;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;


  constructor(data?: Partial<SetupFcu>) {
    super(data);
  }
}

export interface SetupFcuRelations {
  // describe navigational properties here
}

export type SetupFcuWithRelations = SetupFcu & SetupFcuRelations;
