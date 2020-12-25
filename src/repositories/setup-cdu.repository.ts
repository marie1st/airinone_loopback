import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupCdu, SetupCduRelations} from '../models';

export class SetupCduRepository extends DefaultCrudRepository<
  SetupCdu,
  typeof SetupCdu.prototype.id,
  SetupCduRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(SetupCdu, dataSource);
  }
}
