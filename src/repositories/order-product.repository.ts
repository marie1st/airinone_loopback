import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {OrderProduct, OrderProductRelations} from '../models';


export class OrderProductRepository extends DefaultCrudRepository<
  OrderProduct,
  typeof OrderProduct.prototype.order_id,
  OrderProductRelations
> {

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(OrderProduct, dataSource);

  }
}
