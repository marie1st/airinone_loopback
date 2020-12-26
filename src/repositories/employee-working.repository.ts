<<<<<<< HEAD
import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Employee, EmployeeWorking, EmployeeWorkingRelations, OrderProduct} from '../models';
import {EmployeeRepository} from './employee.repository';
import {OrderProductRepository} from './order-product.repository';
=======
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {EmployeeWorking, EmployeeWorkingRelations} from '../models';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

export class EmployeeWorkingRepository extends DefaultCrudRepository<
  EmployeeWorking,
  typeof EmployeeWorking.prototype.order_id,
  EmployeeWorkingRelations
> {
<<<<<<< HEAD

  public readonly Employee: BelongsToAccessor<Employee, typeof EmployeeWorking.prototype.employee_id>;

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof EmployeeWorking.prototype.order_id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(EmployeeWorking, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
    this.Employee = this.createBelongsToAccessorFor('Employee', employeeRepositoryGetter,);
    this.registerInclusionResolver('Employee', this.Employee.inclusionResolver);
=======
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(EmployeeWorking, dataSource);
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}
