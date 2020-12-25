import {Entity, model, property} from '@loopback/repository';

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
    type: 'string',
    required: true,
  })
  employee_id: string;


  constructor(data?: Partial<EmergencyContact>) {
    super(data);
  }
}

export interface EmergencyContactRelations {
  // describe navigational properties here
}

export type EmergencyContactWithRelations = EmergencyContact & EmergencyContactRelations;
