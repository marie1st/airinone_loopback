<<<<<<< HEAD
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Department, DepartmentRelations, Employee} from '../models';
import {EmployeeRepository} from './employee.repository';
=======
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Department, DepartmentRelations} from '../models';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

export class DepartmentRepository extends DefaultCrudRepository<
  Department,
  typeof Department.prototype.id,
  DepartmentRelations
> {
<<<<<<< HEAD

  public readonly employees: HasManyRepositoryFactory<Employee, typeof Department.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>,
  ) {
    super(Department, dataSource);
    this.employees = this.createHasManyRepositoryFactoryFor('employees', employeeRepositoryGetter,);
    this.registerInclusionResolver('employees', this.employees.inclusionResolver);
=======
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(Department, dataSource);
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}
