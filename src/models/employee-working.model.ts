<<<<<<< HEAD
import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Employee} from './employee.model';
import {OrderProduct} from './order-product.model';
=======
import {Entity, model, property} from '@loopback/repository';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

@model()
export class EmployeeWorking extends Entity {
  @property({
<<<<<<< HEAD
    type: 'date',
    required: true,
  })
  date: string;
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @belongsTo(() => Employee, {name: 'Employee'})
  employee_id: string;

  @belongsTo(() => OrderProduct, {name: 'OrderProduct'})
  order_id: string;
=======
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

>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

  constructor(data?: Partial<EmployeeWorking>) {
    super(data);
  }
}

export interface EmployeeWorkingRelations {
  // describe navigational properties here
}

export type EmployeeWorkingWithRelations = EmployeeWorking & EmployeeWorkingRelations;
