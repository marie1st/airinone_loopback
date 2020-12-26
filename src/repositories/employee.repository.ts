<<<<<<< HEAD
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Employee, EmployeeRelations, EmergencyContact, Education, Department, Role, Employment} from '../models';
import {EmergencyContactRepository} from './emergency-contact.repository';
import {EducationRepository} from './education.repository';
import {DepartmentRepository} from './department.repository';
import {RoleRepository} from './role.repository';
import {EmploymentRepository} from './employment.repository';
=======
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Employee, EmployeeRelations} from '../models';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.employee_id,
  EmployeeRelations
> {
<<<<<<< HEAD

  public readonly emergencyContact: HasOneRepositoryFactory<EmergencyContact, typeof Employee.prototype.employee_id>;

  public readonly education: BelongsToAccessor<Education, typeof Employee.prototype.employee_id>;

  public readonly department: BelongsToAccessor<Department, typeof Employee.prototype.employee_id>;

  public readonly role: BelongsToAccessor<Role, typeof Employee.prototype.employee_id>;

  public readonly employment: BelongsToAccessor<Employment, typeof Employee.prototype.employee_id>;

  public readonly Employment: BelongsToAccessor<Employment, typeof Employee.prototype.employee_id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('EmergencyContactRepository') protected emergencyContactRepositoryGetter: Getter<EmergencyContactRepository>, @repository.getter('EducationRepository') protected educationRepositoryGetter: Getter<EducationRepository>, @repository.getter('DepartmentRepository') protected departmentRepositoryGetter: Getter<DepartmentRepository>, @repository.getter('RoleRepository') protected roleRepositoryGetter: Getter<RoleRepository>, @repository.getter('EmploymentRepository') protected employmentRepositoryGetter: Getter<EmploymentRepository>,
  ) {
    super(Employee, dataSource);
    this.Employment = this.createBelongsToAccessorFor('Employment', employmentRepositoryGetter,);
    this.registerInclusionResolver('Employment', this.Employment.inclusionResolver);
    this.employment = this.createBelongsToAccessorFor('employment', employmentRepositoryGetter,);
    this.registerInclusionResolver('employment', this.employment.inclusionResolver);
    this.role = this.createBelongsToAccessorFor('role', roleRepositoryGetter,);
    this.registerInclusionResolver('role', this.role.inclusionResolver);
    this.department = this.createBelongsToAccessorFor('department', departmentRepositoryGetter,);
    this.registerInclusionResolver('department', this.department.inclusionResolver);
    this.education = this.createBelongsToAccessorFor('education', educationRepositoryGetter,);
    this.registerInclusionResolver('education', this.education.inclusionResolver);
    this.emergencyContact = this.createHasOneRepositoryFactoryFor('emergencyContact', emergencyContactRepositoryGetter);
    this.registerInclusionResolver('emergencyContact', this.emergencyContact.inclusionResolver);
=======
  constructor(
    @inject('datasources.db') dataSource: AirinoneDataSource,
  ) {
    super(Employee, dataSource);
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}
