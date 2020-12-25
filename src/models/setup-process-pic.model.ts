import {Entity, model, property} from '@loopback/repository';

@model()
export class SetupProcessPic extends Entity {
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
  pic: string;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;

  @property({
    type: 'number',
    required: true,
  })
  setup_process_id: number;


  constructor(data?: Partial<SetupProcessPic>) {
    super(data);
  }
}

export interface SetupProcessPicRelations {
  // describe navigational properties here
}

export type SetupProcessPicWithRelations = SetupProcessPic & SetupProcessPicRelations;
