import {Entity, model, property} from '@loopback/repository';

@model()
export class ProblemReport extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;


  constructor(data?: Partial<ProblemReport>) {
    super(data);
  }
}

export interface ProblemReportRelations {
  // describe navigational properties here
}

export type ProblemReportWithRelations = ProblemReport & ProblemReportRelations;
