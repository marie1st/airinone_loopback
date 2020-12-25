import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupCost, SetupCostRelations} from '../models';

export class SetupCostRepository extends DefaultCrudRepository<
  SetupCost,
  typeof SetupCost.prototype.id,
  SetupCostRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(SetupCost, dataSource);
  }
}
