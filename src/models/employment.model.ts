<<<<<<< HEAD
import {Entity, model, property, hasMany} from '@loopback/repository';
import {Employee} from './employee.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class Employment extends Entity {
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

<<<<<<< HEAD
  @hasMany(() => Employee)
  employees: Employee[];
=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  constructor(data?: Partial<Employment>) {
    super(data);
  }
}

export interface EmploymentRelations {
  // describe navigational properties here
}

export type EmploymentWithRelations = Employment & EmploymentRelations;
