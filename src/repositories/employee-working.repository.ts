import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {EmployeeWorking, EmployeeWorkingRelations} from '../models';

export class EmployeeWorkingRepository extends DefaultCrudRepository<
  EmployeeWorking,
  typeof EmployeeWorking.prototype.order_id,
  EmployeeWorkingRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(EmployeeWorking, dataSource);
  }
}
