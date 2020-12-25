import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {AddLiquid, AddLiquidRelations} from '../models';

export class AddLiquidRepository extends DefaultCrudRepository<
  AddLiquid,
  typeof AddLiquid.prototype.id,
  AddLiquidRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(AddLiquid, dataSource);
  }
}
