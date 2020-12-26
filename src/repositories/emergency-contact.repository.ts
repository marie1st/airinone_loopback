<<<<<<< HEAD
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {EmergencyContact, EmergencyContactRelations, Employee} from '../models';
import {EmployeeRepository} from './employee.repository';
=======
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {EmergencyContact, EmergencyContactRelations} from '../models';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

export class EmergencyContactRepository extends DefaultCrudRepository<
  EmergencyContact,
  typeof EmergencyContact.prototype.employee_id,
  EmergencyContactRelations
> {
<<<<<<< HEAD

  public readonly Employee: BelongsToAccessor<Employee, typeof EmergencyContact.prototype.employee_id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>,
  ) {
    super(EmergencyContact, dataSource);
    this.Employee = this.createBelongsToAccessorFor('Employee', employeeRepositoryGetter,);
    this.registerInclusionResolver('Employee', this.Employee.inclusionResolver);
=======
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(EmergencyContact, dataSource);
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}
