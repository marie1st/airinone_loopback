import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {OrderProduct, OrderProductRelations} from '../models';

<<<<<<< HEAD

=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
export class OrderProductRepository extends DefaultCrudRepository<
  OrderProduct,
  typeof OrderProduct.prototype.order_id,
  OrderProductRelations
> {
<<<<<<< HEAD

=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(OrderProduct, dataSource);
<<<<<<< HEAD

=======
>>>>>>> e5cf0a7b95fe9f0f1bd516902c409a58f7a5ebbe
  }
}
