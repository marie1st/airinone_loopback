import {Entity, model, property} from '@loopback/repository';

@model()
export class AddLiquid extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  liquid_to_sys: number;

  @property({
    type: 'boolean',
    required: true,
  })
  is_pass: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  is_standard: boolean;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;


  constructor(data?: Partial<AddLiquid>) {
    super(data);
  }
}

export interface AddLiquidRelations {
  // describe navigational properties here
}

export type AddLiquidWithRelations = AddLiquid & AddLiquidRelations;
