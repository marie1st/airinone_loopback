<<<<<<< HEAD
import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Employee} from './employee.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class EmergencyContact extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'string',
    required: true,
  })
  phone_number: string;

  @property({
    type: 'string',
    required: true,
  })
  relationship: string;

  @property({
<<<<<<< HEAD
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @belongsTo(() => Employee, {name: 'Employee'})
  employee_id: string;

  @property({
    type: 'string',
  })
  employeeId?: string;
=======
    type: 'string',
    required: true,
  })
  employee_id: string;

>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  constructor(data?: Partial<EmergencyContact>) {
    super(data);
  }
}

export interface EmergencyContactRelations {
  // describe navigational properties here
}

export type EmergencyContactWithRelations = EmergencyContact & EmergencyContactRelations;
