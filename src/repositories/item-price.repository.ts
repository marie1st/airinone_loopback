import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {ItemPrice, ItemPriceRelations} from '../models';

export class ItemPriceRepository extends DefaultCrudRepository<
  ItemPrice,
  typeof ItemPrice.prototype.id,
  ItemPriceRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(ItemPrice, dataSource);
  }
}
