<<<<<<< HEAD
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {WithdrawMoney, WithdrawMoneyRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';
=======
import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {WithdrawMoney, WithdrawMoneyRelations} from '../models';
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe

export class WithdrawMoneyRepository extends DefaultCrudRepository<
  WithdrawMoney,
  typeof WithdrawMoney.prototype.order_id,
  WithdrawMoneyRelations
> {
<<<<<<< HEAD

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof WithdrawMoney.prototype.order_id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(WithdrawMoney, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
=======
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(WithdrawMoney, dataSource);
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}
