<<<<<<< HEAD
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Education, EducationRelations, Employee} from '../models';
import {EmployeeRepository} from './employee.repository';
=======
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Education, EducationRelations} from '../models';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

export class EducationRepository extends DefaultCrudRepository<
  Education,
  typeof Education.prototype.id,
  EducationRelations
> {
<<<<<<< HEAD

  public readonly employee: HasOneRepositoryFactory<Employee, typeof Education.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>,
  ) {
    super(Education, dataSource);
    this.employee = this.createHasOneRepositoryFactoryFor('employee', employeeRepositoryGetter);
    this.registerInclusionResolver('employee', this.employee.inclusionResolver);
=======
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(Education, dataSource);
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}
