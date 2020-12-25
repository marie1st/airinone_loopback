import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Wage, WageRelations} from '../models';

export class WageRepository extends DefaultCrudRepository<
  Wage,
  typeof Wage.prototype.id,
  WageRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(Wage, dataSource);
  }
}
