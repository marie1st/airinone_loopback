<<<<<<< HEAD
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupCost, SetupCostRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';
=======
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupCost, SetupCostRelations} from '../models';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

export class SetupCostRepository extends DefaultCrudRepository<
  SetupCost,
  typeof SetupCost.prototype.id,
  SetupCostRelations
> {
<<<<<<< HEAD

  public readonly orderProduct: BelongsToAccessor<OrderProduct, typeof SetupCost.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(SetupCost, dataSource);
    this.orderProduct = this.createBelongsToAccessorFor('orderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('orderProduct', this.orderProduct.inclusionResolver);
=======
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(SetupCost, dataSource);
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}
