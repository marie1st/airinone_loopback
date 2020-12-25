import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {LeakTest, LeakTestRelations} from '../models';

export class LeakTestRepository extends DefaultCrudRepository<
  LeakTest,
  typeof LeakTest.prototype.id,
  LeakTestRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(LeakTest, dataSource);
  }
}
