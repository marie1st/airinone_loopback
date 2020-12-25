import {Entity, model, property} from '@loopback/repository';

@model()
export class SetupCdu extends Entity {
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
  cdu_cover: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  cdu_filter: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  hotcoil_frame: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  coolcoil_cleanness: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  hotcoil_cleanness: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  is_cool: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  is_balance: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  is_strong: boolean;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;


  constructor(data?: Partial<SetupCdu>) {
    super(data);
  }
}

export interface SetupCduRelations {
  // describe navigational properties here
}

export type SetupCduWithRelations = SetupCdu & SetupCduRelations;
