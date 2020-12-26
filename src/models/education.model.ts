<<<<<<< HEAD
import {Entity, hasOne, model, property} from '@loopback/repository';
import {Employee} from './employee.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class Education extends Entity {
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
  @hasOne(() => Employee, {keyFrom: 'id'})
  employee: Employee;
=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  constructor(data?: Partial<Education>) {
    super(data);
  }
}

export interface EducationRelations {
  // describe navigational properties here
}

export type EducationWithRelations = Education & EducationRelations;
