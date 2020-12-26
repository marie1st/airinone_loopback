<<<<<<< HEAD
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Customer, CustomerRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';
=======
import {DefaultCrudRepository} from '@loopback/repository';
import {Customer, CustomerRelations} from '../models';
import {AirinoneDataSource} from '../datasources';
import {inject} from '@loopback/core';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {
<<<<<<< HEAD

  public readonly orderProducts: HasManyRepositoryFactory<OrderProduct, typeof Customer.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(Customer, dataSource);
    this.orderProducts = this.createHasManyRepositoryFactoryFor('orderProducts', orderProductRepositoryGetter,);
    this.registerInclusionResolver('orderProducts', this.orderProducts.inclusionResolver);
=======
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(Customer, dataSource);
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}
