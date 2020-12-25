import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {PremiumSetupCost, PremiumSetupCostRelations} from '../models';

export class PremiumSetupCostRepository extends DefaultCrudRepository<
  PremiumSetupCost,
  typeof PremiumSetupCost.prototype.id,
  PremiumSetupCostRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(PremiumSetupCost, dataSource);
  }
}
