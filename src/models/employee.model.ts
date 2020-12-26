<<<<<<< HEAD
import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import {EmergencyContact} from './emergency-contact.model';
import {Education} from './education.model';
import {Department} from './department.model';
import {Role} from './role.model';
import {Employment} from './employment.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class Employee extends Entity {
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
<<<<<<< HEAD
=======

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  employee_id: string;

>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  @property({
    type: 'string',
  })
  birth_date?: string;

  @property({
    type: 'number',
  })
  education_id?: number;

  @property({
    type: 'string',
  })
  talent?: string;

  @property({
    type: 'string',
  })
  etc?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  id_line?: string;

  @property({
    type: 'string',
  })
  facebook?: string;

  @property({
    type: 'string',
  })
  profile_pic?: string;

  @property({
    type: 'string',
  })
  id_card_pic?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  province?: string;

  @property({
    type: 'string',
  })
  subdistrict?: string;

  @property({
    type: 'string',
  })
  postcode?: string;

<<<<<<< HEAD
=======
  @property({
    type: 'string',
    required: true,
  })
  department_id: string;

  @property({
    type: 'string',
    required: true,
  })
  role_id: string;

  @property({
    type: 'string',
    required: true,
  })
  employement_id: string;
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  @property({
    type: 'date',
  })
  start_date?: string;

  @property({
    type: 'number',
    required: true,
  })
  salary: number;

  @property({
    type: 'string',
    required: true,
  })
  super_id: string;

  @property({
    type: 'date',
  })
  created_at?: string;

<<<<<<< HEAD
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  employee_id: string;

  @hasOne(() => EmergencyContact)
  emergencyContact: EmergencyContact;

  @belongsTo(() => Education)
  educationId: number;

  @belongsTo(() => Department)
  departmentId: number;

  @belongsTo(() => Role)
  roleId: number;

  @belongsTo(() => Employment)
  employmentId: number;

  @belongsTo(() => Employment, {name: 'Employment'})
  employement_id: number;
=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
}

export type EmployeeWithRelations = Employee & EmployeeRelations;
