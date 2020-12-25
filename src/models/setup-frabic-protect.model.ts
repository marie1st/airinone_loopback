import {Entity, model, property} from '@loopback/repository';

@model()
export class SetupFrabicProtect extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'boolean',
  })
  is_good?: boolean;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;


  constructor(data?: Partial<SetupFrabicProtect>) {
    super(data);
  }
}

export interface SetupFrabicProtectRelations {
  // describe navigational properties here
}

export type SetupFrabicProtectWithRelations = SetupFrabicProtect & SetupFrabicProtectRelations;
