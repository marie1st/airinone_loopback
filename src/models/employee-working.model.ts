import {Entity, model, property} from '@loopback/repository';

@model()
export class EmployeeWorking extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  order_id: string;

  @property({
    type: 'string',
    required: true,
  })
  employee_id: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;


  constructor(data?: Partial<EmployeeWorking>) {
    super(data);
  }
}

export interface EmployeeWorkingRelations {
  // describe navigational properties here
}

export type EmployeeWorkingWithRelations = EmployeeWorking & EmployeeWorkingRelations;
